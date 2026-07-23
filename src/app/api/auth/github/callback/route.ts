import { NextRequest, NextResponse } from 'next/server';
import { createSession, setAuthCookie } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_OAUTH_ID,
        client_secret: process.env.GITHUB_OAUTH_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.json({ error: tokenData.error }, { status: 400 });
    }

    const accessToken = tokenData.access_token;

    // Get user info
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    const userData = await userResponse.json();
    const username = userData.login;

    // Check if user is authorized
    if (username !== process.env.ADMIN_GITHUB_USERNAME) {
      return NextResponse.json(
        { error: 'Unauthorized. Only Coco can access the admin panel.' },
        { status: 403 }
      );
    }

    // Create session and set cookie
    const sessionToken = await createSession(username);
    const response = NextResponse.redirect(new URL('/admin', req.url));

    // Set auth cookie in response
    response.cookies.set('auth', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(
  process.env.GITHUB_OAUTH_SECRET || 'dev-secret-key'
);

export interface AuthSession {
  username: string;
  id: string;
  iat: number;
  exp: number;
}

export async function createSession(username: string): Promise<string> {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);

  return token;
}

export async function verifySession(token: string): Promise<AuthSession | null> {
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload as unknown as AuthSession;
  } catch {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  });
}

export async function getAuthCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('auth')?.value || null;
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('auth');
}

export async function getSession(): Promise<AuthSession | null> {
  const token = await getAuthCookie();
  if (!token) return null;
  return verifySession(token);
}

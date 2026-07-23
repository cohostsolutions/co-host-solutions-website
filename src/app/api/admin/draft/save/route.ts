import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { saveDraft } from '@/lib/drafts';

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { id, title, description, content, image } = body;

    // Validation
    if (!id || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: id, title, content' },
        { status: 400 }
      );
    }

    if (title.length > 200) {
      return NextResponse.json(
        { error: 'Title must be less than 200 characters' },
        { status: 400 }
      );
    }

    if (content.length < 100) {
      return NextResponse.json(
        { error: 'Content must be at least 100 characters' },
        { status: 400 }
      );
    }

    const draft = await saveDraft(id, title, description || '', content, image);

    return NextResponse.json({
      success: true,
      draft,
      message: 'Draft saved successfully',
    });
  } catch (error) {
    console.error('Save draft error:', error);
    return NextResponse.json(
      { error: 'Failed to save draft' },
      { status: 500 }
    );
  }
}

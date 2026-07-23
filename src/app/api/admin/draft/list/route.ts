import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { listDrafts } from '@/lib/drafts';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const drafts = await listDrafts();

    return NextResponse.json({
      success: true,
      drafts,
      count: drafts.length,
    });
  } catch (error) {
    console.error('List drafts error:', error);
    return NextResponse.json(
      { error: 'Failed to list drafts' },
      { status: 500 }
    );
  }
}

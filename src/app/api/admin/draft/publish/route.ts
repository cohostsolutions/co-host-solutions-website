import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getDraft, deleteDraft } from '@/lib/drafts';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 50);
}

function createMarkdown(title: string, description: string, content: string): string {
  const date = new Date().toISOString().split('T')[0];
  return `---
title: ${title}
description: ${description}
date: ${date}
author: Coco
slug: ${generateSlug(title)}
tags: airbnb, management, philippines
---

${content}
`;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing required field: id' },
        { status: 400 }
      );
    }

    // Get draft
    const draft = await getDraft(id);
    if (!draft) {
      return NextResponse.json(
        { error: 'Draft not found' },
        { status: 404 }
      );
    }

    const { title, description, content } = draft.data;
    const slug = generateSlug(title);
    const date = new Date().toISOString().split('T')[0];
    const filename = `${date}-${slug}.md`;
    const filepath = `src/data/resources/${filename}`;

    // Create markdown content
    const markdown = createMarkdown(title, description, content);
    const encodedContent = Buffer.from(markdown).toString('base64');

    // Commit to GitHub
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.github.com/repos/cohostsolutions/co-host-solutions-website/contents/${filepath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Publish: ${title}`,
          content: encodedContent,
          branch: 'main',
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('GitHub API error:', error);
      return NextResponse.json(
        { error: 'Failed to commit to GitHub', details: error },
        { status: 400 }
      );
    }

    // Delete draft after successful publish
    await deleteDraft(id);

    return NextResponse.json({
      success: true,
      message: 'Post published successfully',
      slug,
      liveUrl: `/resources/${slug}`,
    });
  } catch (error) {
    console.error('Publish draft error:', error);
    return NextResponse.json(
      { error: 'Failed to publish draft' },
      { status: 500 }
    );
  }
}

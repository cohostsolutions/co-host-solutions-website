import { kv } from '@vercel/kv';

export interface Draft {
  id: string;
  type: 'blog';
  data: {
    title: string;
    description: string;
    content: string;
    image?: string;
    updatedAt: string;
  };
  createdAt: string;
}

const DRAFT_KEY_PREFIX = 'draft:';
const DRAFTS_LIST_KEY = 'drafts:list';

export async function saveDraft(
  id: string,
  title: string,
  description: string,
  content: string,
  image?: string
): Promise<Draft> {
  const draft: Draft = {
    id,
    type: 'blog',
    data: {
      title,
      description,
      content,
      image,
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
  };

  const key = `${DRAFT_KEY_PREFIX}${id}`;

  try {
    // Save draft
    await kv.set(key, JSON.stringify(draft), { ex: 30 * 24 * 60 * 60 }); // 30 days

    // Add to drafts list if new
    const listKey = `${DRAFTS_LIST_KEY}:coco`;
    const list = await kv.get(listKey);
    const draftIds = list ? (JSON.parse(list as string) as string[]) : [];
    if (!draftIds.includes(id)) {
      draftIds.push(id);
      await kv.set(listKey, JSON.stringify(draftIds));
    }

    return draft;
  } catch (error) {
    console.error('Error saving draft:', error);
    throw new Error('Failed to save draft');
  }
}

export async function getDraft(id: string): Promise<Draft | null> {
  try {
    const key = `${DRAFT_KEY_PREFIX}${id}`;
    const draft = await kv.get(key);
    return draft ? JSON.parse(draft as string) : null;
  } catch (error) {
    console.error('Error getting draft:', error);
    return null;
  }
}

export async function listDrafts(): Promise<Draft[]> {
  try {
    const listKey = `${DRAFTS_LIST_KEY}:coco`;
    const list = await kv.get(listKey);
    const draftIds = list ? (JSON.parse(list as string) as string[]) : [];

    const drafts: Draft[] = [];
    for (const id of draftIds) {
      const draft = await getDraft(id);
      if (draft) {
        drafts.push(draft);
      }
    }

    // Sort by most recent first
    return drafts.sort(
      (a, b) =>
        new Date(b.data.updatedAt).getTime() -
        new Date(a.data.updatedAt).getTime()
    );
  } catch (error) {
    console.error('Error listing drafts:', error);
    return [];
  }
}

export async function deleteDraft(id: string): Promise<void> {
  try {
    const key = `${DRAFT_KEY_PREFIX}${id}`;
    await kv.del(key);

    // Remove from list
    const listKey = `${DRAFTS_LIST_KEY}:coco`;
    const list = await kv.get(listKey);
    if (list) {
      const draftIds = (JSON.parse(list as string) as string[]).filter(
        (draftId) => draftId !== id
      );
      if (draftIds.length > 0) {
        await kv.set(listKey, JSON.stringify(draftIds));
      } else {
        await kv.del(listKey);
      }
    }
  } catch (error) {
    console.error('Error deleting draft:', error);
    throw new Error('Failed to delete draft');
  }
}

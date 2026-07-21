import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  image?: string;
  tags?: string[];
  slug: string;
}

export interface Post {
  content: string;
  frontmatter: PostFrontmatter;
}

export function parsePost(fileContent: string): Post {
  const { data, content } = matter(fileContent);

  const html = md.render(content);

  return {
    content: html,
    frontmatter: data as PostFrontmatter,
  };
}

export function extractExcerpt(html: string, length = 160): string {
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > length ? text.substring(0, length) + "..." : text;
}

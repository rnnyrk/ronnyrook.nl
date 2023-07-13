import type * as i from 'types';
import matter from 'gray-matter';

export function fetchPostBySlug(slug: string): i.Post {
  const filePath = `blogs/${slug}.md`;
  const fileContent = matter.read(filePath);

  return {
    title: fileContent.data.title,
    date: fileContent.data.date,
    tags: fileContent.data.tags,
    summary: fileContent.data.summary,
    slug: `/blog/${slug}`,
    content: fileContent.content,
  };
}

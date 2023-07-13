import fs from 'fs';
import type * as i from 'types';
import matter from 'gray-matter';

export function fetchPostsOverview(): i.OverviewPost[] {
  const folder = 'blogs/';
  const files = fs.readdirSync(folder);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fileContent = matter.read(`${folder}${file}`);
      const slug = file.replace('.md', '');

      return {
        title: fileContent.data.title,
        date: fileContent.data.date,
        tags: fileContent.data.tags,
        summary: fileContent.data.summary,
        slug: `/blog/${slug}`,
      };
    });

  return posts;
}

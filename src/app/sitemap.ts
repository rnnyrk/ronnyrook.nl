import { fetchPosts } from 'queries/posts/fetchPosts';
import { getSiteUrl } from 'utils';

export default function sitemap() {
  const posts = fetchPosts();

  const blogs = posts.map((post) => ({
    url: `${getSiteUrl()}${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ['', '/cv', '/blog', '/resources'].map((route) => ({
    url: `${getSiteUrl()}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}

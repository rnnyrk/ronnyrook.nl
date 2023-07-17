import { fetchPostBySlug } from 'queries/posts/fetchPostBySlug';
import { Container } from 'common/layout/Container';
import { PageHeader } from 'modules/layouts/PageHeader';
import { Article } from 'modules/work/Article';

export async function generateMetadata({ params }) {
  const post = fetchPostBySlug(params.slug);

  const imageProps = {
    url: `https://rnny.nl/api/og?title=${post.title}`,
    width: 1200,
    height: 630,
  };

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    authors: [
      {
        name: 'Ronny Rook',
        url: 'https://rnny.nl',
      },
    ],
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://rnny.nl/blog/${post.slug}`,
      siteName: 'Ronny Rook',
      images: [imageProps],
      locale: 'en-US',
      type: 'website',
    },
    twitter: {
      title: post.title,
      description: post.summary,
      card: 'summary_large_image',
      images: [imageProps],
      creator: '@rnnyrk',
    },
  };
}

const BlogPost = ({ params }) => {
  const post = fetchPostBySlug(params.slug);

  return (
    <>
      <PageHeader
        title={post.title}
        summary={post.summary}
        backUrl="/work"
      />

      <section className="py-20 bg-white dark:bg-rnny-dark-tint">
        <Container className="px-8">
          <Article post={post} />
        </Container>
      </section>
    </>
  );
};

export default BlogPost;

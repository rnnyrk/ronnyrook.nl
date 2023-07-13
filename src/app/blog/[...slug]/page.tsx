import { fetchPostBySlug } from 'queries/posts/fetchPostBySlug';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { Article } from 'modules/blog/Article';

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
      <Container className="px-8 mb-6 pb-10 md:mb-10 md:pb-20">
        <Heading>{post.title}</Heading>
        <p className="mt-8 mb-20 text-lg">{post.summary}</p>
      </Container>

      <section className="py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
        <Container className="px-8">
          <Article post={post} />
        </Container>
      </section>
    </>
  );
};

export default BlogPost;

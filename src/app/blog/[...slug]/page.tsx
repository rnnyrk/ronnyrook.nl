import { fetchPostBySlug } from 'queries/posts/fetchPostBySlug';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { Article } from 'modules/blog/Article';

export async function generateMetadata({ params }) {
  const post = fetchPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: 'Ronny Rook', url: 'https://ronnyrook.nl' }],
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

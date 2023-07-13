import { fetchPostBySlug } from 'queries/posts/fetchPostBySlug';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { Article } from 'modules/blog/Article';

export const metadata = {
  title: 'Blog',
};

const BlogPost = ({ params }) => {
  const post = fetchPostBySlug(params.slug);

  return (
    <>
      <Container className="px-8 mb-6 pb-10 md:mb-10 md:pb-20">
        <Heading>Blog</Heading>
        <p className="mt-8 mb-20 text-lg">
          Every now and then I write a blog post about something I have a good opinion about or I
          want to learn you something new.
        </p>
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

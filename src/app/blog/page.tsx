import { fetchPostsOverview } from 'queries/posts/fetchPostsOverview';
import { cn } from 'utils';
import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: 'Blog',
};

const Blog = async () => {
  const posts = fetchPostsOverview();

  const classes = cn(
    'min-w-full p-8 mb-4 md:mb-8 rounded-xl shadow-md bg-rnny-light dark:bg-rnny-dark',
    {},
  );

  // @TODO pass render as to Heading (h1, h2, h3, h4)

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
          {posts.map((post) => {
            return (
              <div
                className={classes}
                key={`post_${post.slug}`}
              >
                <Heading className="text-2xl mb-4">{post.title}</Heading>
                <p className="mb-12">{post.summary}</p>
                <Button
                  type="link"
                  href={post.slug}
                  variant="secondary"
                >
                  Read "{post.title}"
                </Button>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
};

export default Blog;
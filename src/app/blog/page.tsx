import { fetchPostsOverview } from 'queries/posts/fetchPostsOverview';
import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Tag } from 'common/layout/Tag';
import { Heading } from 'common/typography/Heading';
import { PageHeader } from 'modules/layouts/PageHeader';

export const metadata = {
  title: 'Blog',
};

const Blog = async () => {
  const posts = fetchPostsOverview();

  return (
    <>
      <PageHeader
        title="Blog"
        className="mb-6 md:mb-10"
        summary="Every now and then I write a blog post about something I have a good opinion about or I
        want to learn you something new."
      />

      <section className="py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
        <Container className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          {posts.map((post) => {
            return (
              <div
                className="min-w-full p-8 mb-4 md:mb-8 rounded-xl shadow-md bg-rnny-light dark:bg-rnny-dark"
                key={`post_${post.slug}`}
              >
                <div>
                  {post.tags?.map((tag) => (
                    <Tag
                      key={tag}
                      title={tag}
                    />
                  ))}
                </div>
                <Heading
                  as="h2"
                  className="my-4 text-black dark:text-white"
                >
                  {post.title}
                </Heading>
                <p className="mb-12">{post.summary}</p>
                <Button
                  type="link"
                  href={post.slug}
                >
                  <span className="truncate">Read "{post.title}"</span>
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

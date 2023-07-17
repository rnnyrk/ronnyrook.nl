import { fetchPostsOverview } from 'queries/posts/fetchPostsOverview';
import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Tag } from 'common/layout/Tag';
import { Heading } from 'common/typography/Heading';
import { PageHeader } from 'modules/layouts/PageHeader';
import { Cube } from 'modules/work/Cube';

export const metadata = {
  title: 'Work',
  description:
    'Blogs about various Javascript topics, like React / Expo, CSS, Framer Motion, and more. And cases about projects I have worked on, such as websites with NextJS, apps with React Native.',
};

const Work = async () => {
  const posts = fetchPostsOverview();

  return (
    <>
      <PageHeader
        title="Work"
        className="mb-6 md:mb-10"
        summary="Every now and then I write a blog post about something I have a good opinion about or I
        want to learn you something new."
      />

      <section className="py-20 md:py-60 bg-white dark:bg-rnny-dark-tint">
        <Container className="max-w-8xl grid grid-cols-2 gap-8">
          {/* <Cube
            title="Ronny"
            image=""
          /> */}

          {posts.map((post) => {
            return (
              <div
                className="min-w-full p-8 my-80 rounded-xl shadow-md bg-rnny-light dark:bg-rnny-dark"
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
                  className="my-4"
                >
                  {post.title}
                </Heading>
                <p className="mb-12">{post.summary}</p>
                <Button
                  type="link"
                  href={post.slug}
                  variant="secondary"
                >
                  <span className="truncate">Read "{post.title}"</span>
                </Button>
              </div>
            );
          })}

          {/* <Cube
            title="Amdax"
            image=""
          /> */}
        </Container>
      </section>
    </>
  );
};

export default Work;

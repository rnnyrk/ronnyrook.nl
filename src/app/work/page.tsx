import { fetchPosts } from 'queries/posts/fetchPosts';
import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Tag } from 'common/layout/Tag';
import { Heading } from 'common/typography/Heading';
import { PageHeader } from 'modules/layouts/PageHeader';
import { Cube } from 'modules/work/Cube';

export const revalidate = 300; // 5 minutes

export const metadata = {
  title: 'Blog',
  description:
    'Find blogs about e.g. social authentication with Expo (React Native) and Supabase, but also opinionated blogs about Tailwind CSS or Typescript.',
};

async function Work() {
  const posts = fetchPosts();

  return (
    <>
      <PageHeader
        title="Work"
        className="mb-6 md:mb-10"
        summary="Every now and then I write a blog post about something I have a good opinion about or I
        want to learn you something new."
      />

      <section className="flex flex-wrap justify-center py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
        <Cube
          title="SafeWord"
          image=""
        />
        <Cube
          title="Amdax"
          image=""
        />
        <Cube
          title="GIF the Aux"
          image=""
        />
        <Cube
          title="Roommates"
          image=""
        />
        <Cube
          title="Voicy"
          image=""
        />
        <Cube
          title="Archeomaps"
          image=""
        />
        <Cube
          title="Ruach"
          image=""
        />
      </section>
    </>
  );
}

export default Work;

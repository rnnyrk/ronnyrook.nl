import Amdax1 from 'images/projects/amdax-1.png';
import Amdax2 from 'images/projects/amdax-2.png';
import Gta1 from 'images/projects/gta-1.png';
import Gta2 from 'images/projects/gta-2.png';
import SafeWord1 from 'images/projects/safeword-1.png';
import SafeWord2 from 'images/projects/safeword-2.png';
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
        summary="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend hendrerit massa in facilisis. Aenean auctor tortor eget elit pharetra varius. Proin hendrerit sed diam suscipit vehicula. Proin vel magna a quam ullamcorper feugiat ut vitae arcu. Donec quis fringilla tellus. Nam ac consequat mauris. In libero metus, rutrum vel nisi sit amet, dictum elementum erat. Morbi tellus orci, commodo sed iaculis vestibulum, dapibus ut mauris. Morbi non magna odio. Integer sit amet consequat mauris. Pellentesque laoreet sodales ornare. Nunc condimentum vitae dolor vitae ullamcorper."
      />

      <section className="flex flex-wrap justify-center py-40 md:pt-[30vh] md:pb-0 bg-white dark:bg-rnny-dark-tint">
        <Cube
          title="SafeWord"
          slug="/work/safeword"
          image={SafeWord1}
          image2={SafeWord2}
        />
        <Cube
          title="Amdax"
          slug="/work/amdax"
          image={Amdax1}
          image2={Amdax2}
        />
        <Cube
          title="GIF the Aux"
          slug="/work/gif-the-aux"
          image={Gta1}
          image2={Gta2}
        />
        <Cube
          title="Roommates"
          slug="/work/roommates"
          image={SafeWord1}
          image2={SafeWord2}
        />
        <Cube
          title="Voicy"
          slug="/work/voicy"
          image={Amdax1}
          image2={Amdax2}
        />
        <Cube
          title="Ruach"
          slug="/work/ruach"
          image={SafeWord1}
          image2={SafeWord2}
        />
      </section>
    </>
  );
}

export default Work;

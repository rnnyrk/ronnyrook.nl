import Amdax1 from 'images/projects/amdax-1.png';
import Amdax2 from 'images/projects/amdax-2.png';
import Gta1 from 'images/projects/gta-1.png';
import Gta2 from 'images/projects/gta-2.png';
import SafeWord1 from 'images/projects/safeword-1.png';
import SafeWord2 from 'images/projects/safeword-2.png';
import { fetchPosts } from 'queries/posts/fetchPosts';
import PageAnimation from 'modules/layouts/PageAnimation';
import { PageHeader } from 'modules/layouts/PageHeader';

export const revalidate = 300; // 5 minutes

export const metadata = {
  title: 'Work',
  // @TODO
  description: '',
};

async function Work() {
  const posts = fetchPosts();

  return (
    <PageAnimation>
      <PageHeader
        title="Work"
        className="mb-6 md:mb-10"
        summary="As a developer you stand out by the work you do. I've been fortunate to work on some amazing projects with to support of great people and companies. Here are some of my favourites."
      />

      <section className="flex flex-col flex-wrap justify-center items-center py-40 md:pt-[30vh] md:pb-0 bg-white dark:bg-rnny-dark-tint"></section>
    </PageAnimation>
  );
}

export default Work;

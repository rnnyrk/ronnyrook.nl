import Image from 'next/image';

import Amdax1 from 'images/projects/amdax-1.png';
import Amdax2 from 'images/projects/amdax-2.png';
import Gta2 from 'images/projects/gta-2.png';
import Roommates1 from 'images/projects/roommates-1.png';
import SafeWord1 from 'images/projects/safeword-1.png';
import { cn } from 'utils';
import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import PageAnimation from 'modules/layouts/PageAnimation';
import { PageHeader } from 'modules/layouts/PageHeader';

export const revalidate = 300; // 5 minutes

export const metadata = {
  title: 'Work',
  description:
    "I've been fortunate to work on some amazing projects with to support of great people and companies. Here are some of my favourites.",
};

const projects = [
  {
    title: 'Stedin',
    slug: 'stedin',
    description:
      'Stedin is a Dutch energy company that provides electricity and gas to more than 2 million customers in the Netherlands. Project via iO Consultancy',
    image: Amdax1,
    role: 'Frontend Developer & Project Consultant',
    link: 'https://www.stedin.net/',
  },
  {
    title: 'Amdax',
    slug: 'amdax',
    description:
      'A cryptocurrency exchange platform in the Netherlands, allowing users to trade various cryptocurrencies. Project via Label A.',
    image: Amdax2,
    role: 'Frontend Developer & Project Lead',
    link: 'https://www.amdax.com/nl',
  },
  {
    title: 'SafeWord',
    slug: 'safeword',
    description:
      'Realtime verficiation. Protect yourself against online fraud. Not sure if the caller is acually your family or bank? SafeWord it!',
    image: SafeWord1,
    role: 'Frontend Developer & Co-Creator',
    link: 'https://getsafeword.app/',
  },
  {
    title: 'GIF the Aux',
    slug: 'giftheaux',
    description:
      'Unleash the music madness! Match the GIF with the beats and get ready for a singing and laughing frenzy.',
    image: Gta2,
    role: 'Frontend Developer & Co-Creator',
    link: 'https://giftheaux.com/',
  },
  {
    title: 'Roommates',
    slug: 'roommates',
    description:
      'Roommates is a social app that allows you to create a house, add roommates, make grocery lists, and more.',
    image: Roommates1,
    role: 'Frontend Developer & Creator',
    link: 'https://roommatesapp.nl/',
  },
];

async function Work() {
  return (
    <PageAnimation>
      <PageHeader
        title="Work"
        className="mb-6 md:mb-10"
        summary="I've been fortunate to work on some amazing projects with to support of great people and companies. Below you can find some of my favourites."
      />

      <section className="flex flex-col flex-wrap justify-center items-center pt-40 pb-8 md:py-60 bg-white dark:bg-rnny-dark-tint">
        <Container className="max-w-6xl">
          {projects.map((project, index) => {
            const isOdd = index % 2 === 0;
            const { description, slug, title, role, link } = project;

            return (
              <div
                key={`project_${title}`}
                className={cn(
                  `w-full min-h-[300px] md:min-h-[500px] flex flex-wrap items-center relative p-2 pt-44 pb-16 md:p-16 mb-32 md:mb-16 ${slug} rounded-xl`,
                  {
                    'flex-row-reverse': !isOdd,
                  },
                )}
              >
                <div
                  className={cn('w-full md:w-2/4', {
                    'px-8 md:px-0 md:pl-16': !isOdd,
                    'px-8 md:px-0 md:pr-16': isOdd,
                  })}
                >
                  <Heading
                    as="h2"
                    size="4xl"
                    weight="bold"
                    color="white"
                  >
                    {title}
                  </Heading>
                  <span className="text-white font-sathosi tracking-wide">{role}</span>
                  <p className="m-0 my-8 text-white font-sathosi tracking-wide">{description}</p>
                  {link && (
                    <Button
                      type="link"
                      href={link}
                      variant="alternative"
                      className="mt-8"
                    >
                      Ga naar {title}
                    </Button>
                  )}
                </div>

                <figure
                  className={cn(
                    'w-[calc(100vw-68px)] h-[200px] md:w-[600px] md:h-[400px] absolute -top-16 md:top-2/4 m-0 md:-mt-[200px] rounded-xl shadow-xl overflow-hidden',
                    {
                      'left-[18px] md:-left-16': !isOdd,
                      'left-[18px] md:left-auto md:-right-16': isOdd,
                    },
                  )}
                >
                  <Image
                    src={project.image}
                    alt={title}
                    className="object-cover"
                    layout="fill"
                  />
                </figure>
              </div>
            );
          })}
        </Container>
      </section>
    </PageAnimation>
  );
}

export default Work;

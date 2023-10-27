import Image from 'next/image';

import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const Intro = () => {
  return (
    <Container className="px-8">
      <article>
        <header className="flex flex-col md:flex-row md:items-center mb-10 md:mb-20">
          <figure className="w-20 h-20 md:w-40 md:h-40 m-0 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/images/ronny-ai.jpg"
              alt="Ronny Rook"
              width={200}
              height={200}
              loading="eager"
            />
          </figure>
          <div className="mt-2 md:mt-0 md:ml-8">
            <Heading className="text-black dark:text-white">Ronny Rook</Heading>
            <h2 className="mt-2 text-lg uppercase">Technically a creative</h2>
          </div>
        </header>

        <p className="mt-10 mb-4">
          Hey there. My name is Ronny, <strong>Javascript developer</strong> from Amsterdam in The
          Netherlands.
        </p>

        <p className="mb-4">
          On a daily basis I'm working as a front-end developer/consultant for iO Consultancy.
          Besides that I work as a freelancer in the same industry, for over 10 years already. Both
          include working mainly on React and React Native projects.
        </p>

        <p className="mb-4">
          Probably every developer has some side projects they're working on. As well do I. For
          example{' '}
          <a
            href="https://apps.apple.com/nl/app/roommates/id1523528110"
            target="_blank"
            rel="noreferrer"
          >
            Roommates
          </a>{' '}
          (an app to manage your household) ,{' '}
          <a
            href="https://voicy.nl"
            target="_blank"
            rel="noreferrer"
          >
            Voicy
          </a>{' '}
          (attach a voice message to a gift) and{' '}
          <a
            href="https://giftheaux.com"
            target="_blank"
            rel="noreferrer"
          >
            GIF the Aux
          </a>{' '}
          (a websockets based party game).
        </p>

        <p className="mb-4">Curious to what I've been doing in the past?</p>
        <Button
          type="link"
          href="/cv"
          variant="secondary"
          className="w-[220px]"
        >
          Check out my CV
        </Button>
      </article>
    </Container>
  );
};

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
            />
          </figure>
          <div className="mt-2 md:mt-0 md:ml-8">
            <Heading>Ronny Rook</Heading>
            <h2 className="mt-2 text-lg uppercase font-medium text-slate-600">
              Technically a creative
            </h2>
          </div>
        </header>

        <p className="mt-10 mb-4 text-lg">
          Hey there. My name is Ronny, <strong>Javascript developer</strong> from Amsterdam in The
          Netherlands.
        </p>

        <p className="mb-4 text-lg">
          On a daily basis I'm working as a front-end developer/consultant for iO Consultancy.
          Besides that I work as a freelancer in the same industry, for over 10 years already. Both
          include working mainly on React and React Native projects.
        </p>

        <p className="mb-4 text-lg">
          Probably every developer has some side projects they're working on. As well do I. For
          example{' '}
          <a
            href="https://apps.apple.com/nl/app/roommates/id1523528110"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-700 underline"
          >
            Roommates
          </a>{' '}
          (an app for to manage your household) ,{' '}
          <a
            href="https://voicy.nl"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-700 underline"
          >
            Voicy
          </a>{' '}
          (attach a voice message to a gift) and{' '}
          <a
            href="https://giftheaux.com"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-700 underline"
          >
            GIF the Aux
          </a>{' '}
          (a websockets based party game).
        </p>

        <p className="mb-4 text-lg">Curious to what I've been doing in the past?</p>
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

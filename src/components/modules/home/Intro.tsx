'use client';

import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import Image from 'next/image';

const getAge = () => {
  const today = new Date();
  const birthDate = new Date('1994-08-03');

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const Intro = () => {
  return (
    <Container>
      <article>
        <header className="flex items-center mb-20">
          <figure className="w-40 h-40 m-0 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/images/ronny-ai.jpg"
              alt="Ronny Rook"
              width={200}
              height={200}
            />
          </figure>
          <div className="ml-8">
            <Heading>Ronny Rook</Heading>
            <h2 className="mt-2 text-lg uppercase font-semibold text-slate-600">
              Technically a creative
            </h2>
          </div>
        </header>

        <p className="mt-10 mb-4 text-lg">
          Hey, I'm Ronny. An {getAge()} year old <strong>Javascript developer</strong> from
          Amsterdam, The Netherlands.
        </p>

        <p className="mb-4 text-lg">
          On a daily basis I'm working for a digital agency Label A. Mainly working on all kind of
          React and React Native based projects as well as leading the innovation team; pushing the
          frontend craft, engineers and tech stack to the next level.
        </p>

        <p className="mb-4 text-lg">
          Furthermore I'm working as a freelance developer and - consultants. This contains various
          projects from settings up CI/CD pipelines to building React (Native) applications. For
          example{' '}
          <a
            href="https://apps.apple.com/nl/app/roommates/id1523528110"
            target="_blank"
            rel="noreferrer"
          >
            Roommates
          </a>{' '}
          is a React Native application.
        </p>

        <p className="mb-4 text-lg">
          Outside of work you can find me in the water kitesurfing, still trying to run a marathon,
          bouldering, riding my motorbike or spending time with friends and/or in nature. So I guess
          I'm your sportive tech nerd who loves being outside.
        </p>
      </article>
    </Container>
  );
};

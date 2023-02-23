'use client';

import { Container } from 'common/layout/Container';
import { Skills } from 'modules/home/Skills';

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

const Home = () => {
  return (
    <Container>
      <article>
        <h1 className="mb-2 text-2xl font-bold">Ronny Rook</h1>
        <p className="mb-4">
          Hey, I'm Ronny. An {getAge()} year old <strong>Javascript developer</strong> from
          Amsterdam, The Netherlands.
        </p>

        <p className="mb-4">
          On a daily basis I'm working for a digital agency Label A. Mainly working on all kind of
          React and React Native based projects as well as leading the innovation team; pushing the
          frontend craft, engineers and tech stack to the next level.
        </p>

        <p className="mb-4">
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

        <p className="mb-4">
          I love building for the web. From simple pages, to native applications, all the way to
          large Next.js applications. <strong>The web and Javascript are incredible</strong>. It
          gives everyone the freedom to just start creating.
        </p>

        <p className="mb-4">
          Outside of work you can find me in the water kitesurfing, still trying to run a marathon,
          bouldering, riding my motorbike or spending time with friends and/or in nature. So I guess
          I'm your sportive tech nerd who loves being outside.
        </p>
      </article>

      <h2 className="mt-10 text-xl font-bold">Techniques I like to use</h2>
      <Skills />

      <footer>
        <p className="text-slate-600 text-xs italic">
          This website is build with React / NextJS 13 (app dir, @next/font), PNPM, Tailwind, Framer
          Motion and TypeScript
        </p>
      </footer>
    </Container>
  );
};

export default Home;

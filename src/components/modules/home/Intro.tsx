import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import Image from 'next/image';

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
          On a daily basis I'm working for a digital agency Label A. My main focus is creating new
          and maintaining existing React and React Native projects. Besides that I'm leading an
          innovation team. Together we try to push the frontend craft, engineers and tech stack to
          the next level.
        </p>

        <p className="mb-4 text-lg">
          Furthermore I'm working as freelance developer and - consultant for over 10 years. This
          work contains various projects from settings up CI/CD pipelines to building React (Native)
          applications. For example{' '}
          <a
            href="https://apps.apple.com/nl/app/roommates/id1523528110"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-700 underline"
          >
            Roommates
          </a>
          .
        </p>
      </article>
    </Container>
  );
};

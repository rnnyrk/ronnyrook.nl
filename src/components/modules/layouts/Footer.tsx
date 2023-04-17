import { Container } from 'common/layout/Container';
import GithubSvg from 'vectors/github.svg';
import TwitterSvg from 'vectors/twitter.svg';

export const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-10 h-full">
        <p className="text-slate-600 text-xs italic">
          Build with NextJS 13 (app dir/RSC), PNPM, Tailwind, Framer Motion and TypeScript
        </p>

        <div className="flex mt-4 md:mt-0">
          <a
            href="http://github.com/rnnyrk"
            target="_blank"
            rel="noreferrer"
            className="no-underline mr-4"
          >
            <GithubSvg className="w-6 h-6 hover:fill-rnny-primary" />
          </a>
          <a
            href="http://twitter.com/rnnyrk"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <TwitterSvg className="w-6 h-6 hover:fill-rnny-primary" />
          </a>
        </div>
      </footer>
    </Container>
  );
};

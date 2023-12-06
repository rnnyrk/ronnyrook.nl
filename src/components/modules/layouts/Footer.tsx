import GithubSvg from 'vectors/github.svg';
import LinkedinSvg from 'vectors/linkedin.svg';
import TwitterSvg from 'vectors/twitter.svg';
import { Container } from 'common/layout/Container';

export const Footer = () => {
  return (
    <footer className="px-4 py-10 h-full font-sathosi">
      <Container className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <p className="text-xs italic">
          Build with NextJS app directory and React Server Components, Bun, Tailwind, Framer Motion
          and TypeScript
        </p>

        <div className="flex mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/ronny-rook-02ab1622"
            target="_blank"
            rel="noreferrer"
            className="no-underline mr-4"
          >
            <LinkedinSvg className="w-6 h-6 hover:fill-rnny-primary social-icon" />
          </a>
          <a
            href="http://github.com/rnnyrk"
            target="_blank"
            rel="noreferrer"
            className="no-underline mr-4"
          >
            <GithubSvg className="w-6 h-6 hover:fill-rnny-primary social-icon" />
          </a>
          <a
            href="http://twitter.com/rnnyrk"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <TwitterSvg className="w-6 h-6 hover:fill-rnny-primary social-icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

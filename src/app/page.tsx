import { Container } from 'common/layout/Container';
import { Intro } from 'modules/home/Intro';
import { Skills } from 'modules/home/Skills';

const Home = () => {
  return (
    <Container>
      <Intro />

      <h2 className="mt-20 mb-2 text-xl">Creating the web using</h2>
      <Skills />

      <footer className="mb-8">
        <p className="text-slate-600 text-xs italic">
          Build with NextJS 13 (app dir/RSC), PNPM, Tailwind, Framer Motion and TypeScript
        </p>
      </footer>
    </Container>
  );
};

export default Home;

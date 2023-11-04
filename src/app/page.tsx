import { Card } from 'modules/home/Card';
import { Skills } from 'modules/home/Skills';
import PageAnimation from 'modules/layouts/PageAnimation';

const Home = () => {
  return (
    <PageAnimation>
      <section className="relative h-screen">
        <Card />
        <Skills />
      </section>
    </PageAnimation>
  );
};

export default Home;

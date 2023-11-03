import Image from 'next/image';

import { Heading } from 'common/typography/Heading';
import PageAnimation from 'modules/layouts/PageAnimation';

const Home = () => {
  return (
    <PageAnimation>
      <section className="relative h-screen">
        <div className="absolute left-8 bottom-8 py-8 px-12 rounded-lg bg-slate-200/10">
          <header className="flex items-center">
            <figure className="w-20 h-20 m-0 overflow-hidden rounded-full shadow-lg">
              <Image
                src="/images/ronny-ai.jpg"
                alt="Ronny Rook"
                width={200}
                height={200}
                loading="eager"
              />
            </figure>
            <div className="mt-2 md:mt-0 md:ml-4">
              <Heading
                className="text-black dark:text-white"
                as="h2"
              >
                Ronny Rook
              </Heading>
              <h3 className="text-lg tracking-wide font-sathosi">Technically a creative</h3>
            </div>
          </header>
        </div>
      </section>
    </PageAnimation>
  );
};

export default Home;

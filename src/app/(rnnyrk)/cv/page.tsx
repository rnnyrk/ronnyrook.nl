import { Button } from 'common/interaction/Button';
import { Container } from 'common/layout/Container';
import { Experience } from 'common/layout/Experience';
import PageAnimation from 'modules/layouts/PageAnimation';
import { PageHeader } from 'modules/layouts/PageHeader';

export const metadata = {
  title: 'Curriculum Vitae',
  description: 'CV of Javascript Developer Ronny Rook. Find my work experience and education.',
};

function Cv() {
  return (
    <PageAnimation>
      <PageHeader
        title="Experience"
        className="mb-6 md:mb-10"
        summary="After (and during) studying Comminucations and Multimedia Design at the Hogeschool van
        Amsterdam, I've ended up working for great employers and got the opportunity to work on
        beautiful projects."
      />

      <section className="py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
        <Container className="px-8 max-w-6xl">
          <Experience
            title="Ronny Rook / Just Right Webdesign"
            date="April 2012 - present"
            description="Freelance web development. Full stack development. Focusing on React, React Native, NodeJS and Python."
          />

          <Experience
            title="iO Digital Consultancy"
            date="July 2023 - January 2023"
            description="Senior Frontend Developer and Consultant for external clients such as Stedin"
          />

          <Experience
            title="Label A"
            date="March 2016 - June 2023"
            description="Creating digital products for clients as Amdax, Alicia Insurances, Fastis, Jobner, Nationale Nederlanden, Porsche Nederland"
          />

          <Experience
            title="BIT Students"
            date="December 2016 - August 2018"
            description="Working on various projects developing with VueJS, Polymer, ReactJS, iOS AR Kit"
          />

          <Experience
            title="IQ Media"
            date="February 2013 - July 2014"
            description="Full stack intern and employee. Mainly working with Javascript/jQuery and PHP"
          />
        </Container>

        <div className="flex flex-col items-center mt-4">
          <p className="mb-4 px-8 md:px-0 font-sathosi tracking-wide text-center text-sm">
            Want to read more about my experience, education, skills and achievements?
          </p>
          <Button
            type="link"
            href="/resume-ronny-rook.pdf"
            isBlank
            isDownload
          >
            Download my full CV
          </Button>
        </div>
      </section>
    </PageAnimation>
  );
}

export default Cv;

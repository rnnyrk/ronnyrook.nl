import { Container } from 'common/layout/Container';
import { Experience } from 'common/layout/Experience';
import { PageHeader } from 'modules/layouts/PageHeader';

export const metadata = {
  title: 'Curriculum Vitae',
};

const Cv = () => {
  return (
    <>
      <PageHeader
        title="Experience"
        className="mb-6 md:mb-10"
        summary="After (and during) studying Comminucations and Multimedia Design at the Hogeschool van
        Amsterdam, I've ended up working for great employers and got the opportunity to work on
        beautiful projects."
      />

      <section className="py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
        <Container className="px-8">
          <Experience
            title="iO Digital Consultancy"
            date="July 2023 - present"
            description="Senior Frontend Developer and Consultant for external clients like Stedin"
          />

          <Experience
            title="Label A"
            date="March 2016 - June 2023"
            description="Creating digital products for clients as Amdax, Alicia Insurances, Fastis, Jobner, Nationale Nederlanden, Porsche Nederland"
          />

          <Experience
            title="Just Right Webdesign"
            date="April 2012 - present"
            description="Consulting for and creating digital products"
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
      </section>
    </>
  );
};

export default Cv;

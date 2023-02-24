import { Experience } from 'common/layout/Experience';
import LabelaImg from 'images/labela-logo.png';
import JrwdImg from 'images/jrwd.png';
import BitImg from 'images/bit-logo.png';
import IqMediaImg from 'images/iqmedia-logo.png';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const metadata = {
  title: {
    default: 'Curriculum Vitae',
  },
};

const Cv = () => {
  return (
    <Container>
      <Heading>Experience</Heading>
      <p className="mt-8 mb-20 text-lg">Work experience and projects I've been working on.</p>

      <Experience
        src={LabelaImg}
        title="Label A"
        date="March 2016 - present"
        description="Creating digital products for clients as Amdax, Alicia Insurances, Fastis, Jobner, Nationale Nederlanden, Porsche Nederland"
      />

      <Experience
        src={JrwdImg}
        title="Just Right Webdesign"
        date="April 2012 - present"
        description="Consulting for and creating digital products"
      />

      <Experience
        src={BitImg}
        title="BIT Students"
        date="December 2016 - August 2018"
        description="Working on various projects developing with VueJS, Polymer, ReactJS, iOS AR Kit"
      />

      <Experience
        src={IqMediaImg}
        title="IQ Media"
        date="February 2013 - July 2014"
        description="Full stack intern and employee. Mainly working with Javascript/jQuery and PHP"
      />
    </Container>
  );
};

export default Cv;

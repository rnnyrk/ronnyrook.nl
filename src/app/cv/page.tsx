import { WorkExperience } from 'common/layout/WorkExperience';
import LabelaImg from 'images/labela-logo.png';
import JrwdImg from 'images/jrwd.png';
import BitImg from 'images/bit-logo.png';
import IqMediaImg from 'images/iqmedia-logo.png';

export const metadata = {
  title: {
    default: 'Curriculum Vitae',
  },
};

const Cv = () => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Experience</h1>

      <WorkExperience
        src={LabelaImg}
        title="Label A"
        date="March 2016 - present"
        description="Creating digital products for clients as Amdax, Alicia Insurances, Fastis, Jobner, Nationale Nederlanden, Porsche Nederland"
      />

      <WorkExperience
        src={JrwdImg}
        title="Just Right Webdesign"
        date="April 2012 - present"
        description="Consulting for and creating digital products"
      />

      <WorkExperience
        src={BitImg}
        title="BIT Students"
        date="December 2016 - August 2018"
        description="Working on various projects developing with VueJS, Polymer, ReactJS, iOS AR Kit"
      />

      <WorkExperience
        src={IqMediaImg}
        title="IQ Media"
        date="February 2013 - July 2014"
        description="Full stack intern and employee. Mainly working with Javascript/jQuery and PHP"
      />
    </section>
  );
};

export default Cv;

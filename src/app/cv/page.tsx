export const metadata = {
  title: {
    default: 'Curriculum Vitae',
  },
};

const Cv = () => {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">Experience</h1>
      <div className="flex">
        <div>
          <h3>Label A</h3>
          <span>March 2016 - present</span>
          <p>
            Creating digital products for clients as Amdax, Alicia Insurances, Fastis, Jobner,
            Nationale Nederlanden, Porsche Nederland
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cv;

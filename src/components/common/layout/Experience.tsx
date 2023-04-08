import { Heading } from 'common/typography/Heading';

export const Experience = ({ date, description, title }: ExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start mb-6 pb-6 px-4 md:mb-14 md:pb-14 md:px-0 border-b-2 border-slate-800 last:border-b-0">
      <Heading className="text-xl font-bold w-full md:w-40">{title}</Heading>
      <p className="my-6 md:my-0 md:mx-8 w-10/12 text-slate-600">{description}</p>
      <span className="text-sm mb-4 w-60 text-slate-600">{date}</span>
    </div>
  );
};

type ExperienceProps = {
  date: string;
  description: string;
  title: string;
};

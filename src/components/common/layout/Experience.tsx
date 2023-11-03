import { Heading } from 'common/typography/Heading';

export const Experience = ({ date, description, title }: ExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start mb-6 pb-6 md:mb-14 md:pb-14 md:px-0 border-b-[1px] border-rnny-gray last:border-b-0">
      <Heading className="text-xl font-bold w-full md:w-40 dark:text-white">{title}</Heading>
      <p className="my-6 md:my-0 md:mx-8 w-10/12 text-rnny-dark-text font-sathosi tracking-widest">
        {description}
      </p>
      <span className="text-sm mb-4 w-60 font-sathosi">{date}</span>
    </div>
  );
};

type ExperienceProps = {
  date: string;
  description: string;
  title: string;
};

import { Heading } from 'common/typography/Heading';

export const Experience = ({ date, description, title }: ExperienceProps) => {
  return (
    <div className="flex flex-col items-start md:grid md:grid-cols-[1fr,2fr,1fr] md:gap-8 mb-6 pb-6 md:mb-14 md:pb-14 md:px-0 border-b-[1px] border-rnny-gray last:border-b-0">
      <Heading className="text-xl font-bold dark:text-white">{title}</Heading>
      <p className="my-6 md:my-0 text-rnny-dark-text font-sathosi tracking-wide">{description}</p>
      <span className="text-sm text-right mb-4 font-sathosi">{date}</span>
    </div>
  );
};

type ExperienceProps = {
  date: string;
  description: string;
  title: string;
};

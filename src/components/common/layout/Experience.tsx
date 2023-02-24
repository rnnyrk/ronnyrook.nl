import { Heading } from 'common/typography/Heading';
import Image, { StaticImageData } from 'next/image';

export const Experience = ({ date, description, title, src }: ExperienceProps) => {
  return (
    <div className="flex items-start mb-14 pb-14 border-b-2 border-slate-800 last:border-b-0">
      <Heading className="text-xl font-bold w-40">{title}</Heading>
      <p className="mx-8 w-10/12 text-slate-600">{description}</p>
      <span className="text-sm mb-4 w-60">{date}</span>
    </div>
  );
};

type ExperienceProps = {
  date: string;
  description: string;
  title: string;
  src: StaticImageData;
};

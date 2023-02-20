import Image, { StaticImageData } from 'next/image';

export const Experience = ({ date, description, title, src }: ExperienceProps) => {
  return (
    <div className="flex items-start mb-8 relative">
      <figure className="m-0 p-2 bg-slate-100">
        <Image
          src={src}
          alt={title}
          width={60}
          height={60}
        />
      </figure>
      <div className="ml-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm mb-4 block">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

type ExperienceProps = {
  date: string;
  description: string;
  title: string;
  src: StaticImageData;
};

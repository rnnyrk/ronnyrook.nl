import Image from 'next/image';
import Link from 'next/link';

import { cn } from 'utils';
import { Heading } from 'common/typography/Heading';

export function Card() {
  return (
    <Link
      href="/cv"
      className={cn(
        'absolute left-8 bottom-8 z-20 py-8 px-12 rounded-lg cursor-pointer no-underline',
        'group bg-slate-200/10 hover:bg-rnny-primary-tint',
        'hover:-translate-y-1 transition-all duration-500',
      )}
    >
      <header className="flex items-center">
        <figure className="w-20 h-20 m-0 overflow-hidden rounded-full shadow-lg">
          <Image
            src="/images/ronny-ai.jpg"
            alt="Ronny Rook"
            width={200}
            height={200}
            loading="eager"
          />
        </figure>
        <div className="mt-2 md:mt-0 md:ml-4">
          <Heading
            className="text-black dark:text-white"
            as="h2"
          >
            Ronny Rook
          </Heading>
          <h3
            className={cn(
              'text-lg tracking-wide font-sathosi text-rnny-gray-tint group-hover:text-white',
              'transition-colors duration-500',
            )}
          >
            Technically a creative
          </h3>
        </div>
      </header>
    </Link>
  );
}

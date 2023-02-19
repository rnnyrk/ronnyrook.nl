import Link from 'next/link';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="min-h-full min-w-full overflow-x-hidden">
      <ul className="w-full flex justify-center py-8 mb-10">
        <li className="mx-2">
          <Link href="/">About</Link>
        </li>
        <li className="mx-2">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="mx-2">
          <Link href="/work">Work</Link>
        </li>
        <li className="mx-2">
          <Link href="/cv">Cv</Link>
        </li>
      </ul>
      <main className="max-w-4xl mx-auto">{children}</main>
    </body>
  );
};

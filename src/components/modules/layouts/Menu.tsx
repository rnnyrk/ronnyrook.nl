import Link from 'next/link';

export const Menu = () => {
  return (
    <ul className="w-full flex justify-center py-8 mb-10">
      <li className="mx-2">
        <Link href="/">About</Link>
      </li>
      <li className="mx-2">
        <Link href="/resources">Resources</Link>
      </li>
      <li className="mx-2">
        <Link href="/cv">Cv</Link>
      </li>
    </ul>
  );
};

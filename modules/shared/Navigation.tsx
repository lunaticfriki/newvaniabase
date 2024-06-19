import { AuthButton } from './AuthButton';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex flex-col items-center justify-end w-full h-full p-4 lg:flex-row">
      <AuthButton />
      <ul className="flex gap-2 py-4 my-4 lg:px-4 lg:mx-4 lg:py-0 lg:my-0 border-t-2 border-l-0 border-[var(--primary)] lg:border-l-2 lg:border-t-0">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

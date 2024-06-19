import { AuthButton } from './AuthButton';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-end w-full h-full p-4">
      <ul className="flex gap-2 p-2">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <span className="px-2">|</span>
      <AuthButton />
    </nav>
  );
};

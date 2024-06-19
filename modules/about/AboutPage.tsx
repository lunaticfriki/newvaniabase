import { BackButton } from '../shared';
import Link from 'next/link';

export const About = () => {
  return (
    <div className="grid w-full min-h-screen gap-2 p-4 place-items-center place-content-center">
      <h2 className="text-4xl">Vaniabase</h2>
      <p>
        Version: <span>1.0.0</span>
      </p>
      <Link
        href="http://www.github.com/lunaticfriki"
        target="__blank"
        className="group"
      >
        @lunaticfriki,
        <span className="group-hover:text-[var(--white)] px-2 transition-all">
          {new Date().getFullYear()}
        </span>
      </Link>
      <BackButton />
    </div>
  );
};

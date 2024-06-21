import { BackButton } from '../../shared';
import { GITHUB_URL } from '@/content';
import Link from 'next/link';

export const About = () => {
  return (
    <div className="grid w-full h-full p-4 place-items-center place-content-center">
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 animate-in">
        <h2 className="text-4xl">Vaniabase</h2>
        <p>
          Version: <span>1.0.0</span>
        </p>
        <Link href={GITHUB_URL} target="__blank" className="group">
          @lunaticfriki,
          <span className="group-hover:text-[var(--white)] px-2 transition-all">
            {new Date().getFullYear()}
          </span>
        </Link>
        <BackButton />
      </div>
    </div>
  );
};

import { PATHS, TOOLTIP_MESSAGES } from '@/content';

import { AuthButton } from './AuthButton';
import Link from 'next/link';
import { LucideIcons } from './icons';
import { Tooltip } from '@nextui-org/tooltip';

export const Navigation = () => {
  const { home, about } = PATHS;
  const { home_tooltip, about_tooltip } = TOOLTIP_MESSAGES;

  return (
    <nav className="flex flex-col items-center justify-end w-full h-full p-4 lg:flex-row">
      <ul className="flex gap-2 py-4 my-4 lg:px-4 lg:mx-4 lg:py-0 lg:my-0 border-b-2 border-r-0 border-[var(--primary)] lg:border-r-2 lg:border-b-0">
        <li>
          <Link href={home}>
            <Tooltip showArrow content={home_tooltip}>
              <LucideIcons.home />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link href={about}>
            <Tooltip showArrow content={about_tooltip}>
              <LucideIcons.info />
            </Tooltip>
          </Link>
        </li>
      </ul>{' '}
      <AuthButton />
    </nav>
  );
};

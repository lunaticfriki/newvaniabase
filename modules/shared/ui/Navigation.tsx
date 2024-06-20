import { PATHS, TOOLTIP_MESSAGES } from '@/content';

import { AuthButton } from '@/modules';
import Link from 'next/link';
import { LucideIcons } from '../icons';
import { Tooltip } from '@nextui-org/tooltip';

export const Navigation = () => {
  const { home, about, items } = PATHS;
  const { home_tooltip, about_tooltip, items_tooltip } = TOOLTIP_MESSAGES;

  return (
    <nav className="sticky top-0 flex flex-col items-center justify-end w-full h-full lg:flex-row bg-[var(--blur)] z-10 mb-4 lg:p-4">
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
        <li>
          <Link href={items}>
            <Tooltip showArrow content={items_tooltip}>
              <LucideIcons.items />
            </Tooltip>
          </Link>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
};

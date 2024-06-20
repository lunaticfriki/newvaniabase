import { AuthButton } from '@/modules';
import Link from 'next/link';
import { NavigationContent } from '@/content/nav';
import { Tooltip } from '@nextui-org/tooltip';

export const Navigation = () => {
  return (
    <nav className="sticky top-0 flex flex-col items-center justify-end w-full h-full lg:flex-row bg-[var(--blur)] z-10 mb-4 lg:p-4">
      <ul className="flex gap-2 py-4 my-4 lg:px-4 lg:mx-4 lg:py-0 lg:my-0 border-b-2 border-r-0 border-[var(--primary)] lg:border-r-2 lg:border-b-0">
        {NavigationContent.map((nav) => (
          <li key={nav.href}>
            <Link href={nav.href}>
              <Tooltip showArrow content={nav.tooltip}>
                {nav.icon}
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>
      <AuthButton />
    </nav>
  );
};

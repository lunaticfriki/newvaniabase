'use client';

import { BUTTONS_CONTENT } from '@/content';
import { LucideIcons } from '../icons';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const {back} = BUTTONS_CONTENT
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-start py-2 text-sm no-underline rounded-md group"
    >
      <LucideIcons.left />
      <p className="group-hover:text-[var(--primary)] transition-all">{back}</p>
    </button>
  );
};

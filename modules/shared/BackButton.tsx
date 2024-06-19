'use client';

import { LucideIcons } from './icons';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="absolute flex items-center px-4 py-2 text-sm no-underline rounded-md left-8 top-8 group"
    >
      <LucideIcons.left />
      <p className="group-hover:text-[var(--primary)] transition-all">Back</p>
    </button>
  );
};

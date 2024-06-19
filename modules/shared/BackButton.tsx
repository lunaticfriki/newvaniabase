'use client';

import { LucideIcons } from './icons';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-start py-2 text-sm no-underline rounded-md group"
    >
      <LucideIcons.left />
      <p className="group-hover:text-[var(--primary)] transition-all">Back</p>
    </button>
  );
};

import Image from 'next/image';
import type { Item } from '../types/item-types';
import Link from 'next/link';

export const ItemPreview = ({ item }: { item: Item }) => {
  return (
    <Link
      href={`/items/${item.slug}`}
      key={item.id}
      className="flex flex-col justify-between h-[400px] w-[235px]  lg:h-[400px] lg:w-[300px] m-4 mb-6 lg:mb-4 hover:cursor-pointer transition-all group"
    >
      <Image
        src={item.cover!}
        alt={item.title}
        className="w-full h-full transition-all group-hover:border-4 border-[var(--primary)]"
        width={300}
        height={400}
      />
      <p className="w-full py-4 text-xl text-end">{item.title}</p>
    </Link>
  );
};

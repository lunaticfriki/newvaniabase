import { ITEMS_CONTENT } from '@/content';
import Image from 'next/image';
import type { Item } from '@/modules';

export const ItemDetail = ({ item }: { item: Item }) => {
  const { completed, incomplete } = ITEMS_CONTENT;

  return (
    <div className="w-[90%] lg:w-[550px] text-end px-2 py-4">
      <h2 className="text-3xl">{item.title}</h2>
      <p className="text-[var(--primary)] text-2xl">{item.author}</p>
      <div className="grid w-full place-items-center">
        <Image
          src={item.cover!}
          alt={item.title}
          width={500}
          height={700}
          style={{ objectFit: 'contain' }}
          className="my-4 transition-all group-hover:hue-rotate-90"
        />
      </div>
      <p className="mb-4 text-start">{item.description}</p>
      <p>
        {item.publisher} - <label className="uppercase">{item.topic}</label>
      </p>
      {/* TODO: TAGS
      <p>{item.tags}</p>  
      */}
      <span>{item.completed ? completed : incomplete}</span>
    </div>
  );
};

import { ITEMS_CONTENT } from '@/content';
import type { Item } from '../types/item-types';
import { ItemPreview } from './item-preview';

export const ItemsPreview = ({
  items,
  all,
}: {
  items: Item[];
  all?: boolean;
}) => {
  const { last_items, all_items } = ITEMS_CONTENT;

  return (
    <div className="grid w-full h-full gap-2 place-items-center">
      <h2 className="text-2xl">{!all ? last_items : all_items}</h2>
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 p-2">
        {items?.map((item) => (
          <ItemPreview item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

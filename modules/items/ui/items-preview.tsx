import type { Item } from '../types/item-types';
import { ItemPreview } from './item-preview';

export const ItemsPreview = ({ items }: { items: Item[] }) => {
  return (
    <div className="grid w-full h-full gap-2 place-items-center">
      <h2 className="text-2xl">Last items</h2>
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 p-2">
        {items?.map((item) => (
          <ItemPreview item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

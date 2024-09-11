import { ITEMS_CONTENT } from '@/content';
import { Item, ItemsPreview } from '@/modules';

export const Itemlist = ({ items, all }: { items: Item[]; all?: boolean }) => {
  const { no_items } = ITEMS_CONTENT;

  return (
    <div className="grid w-full h-full place-items-center place-content-center">
      <div className="flex flex-wrap w-full gap-2 p-2">
        {!items.length ? (
          <p className="flex items-center justify-center w-full h-full">
            {no_items}
          </p>
        ) : (
          <ItemsPreview items={items} all={all} />
        )}
      </div>
    </div>
  );
};

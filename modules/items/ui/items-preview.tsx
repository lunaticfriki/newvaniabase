import { ITEMS_CONTENT } from '@/content';
import type { Item } from '../types/item-types';
import { ItemPreview } from './item-preview';

export const ItemsPreview = ({
  items,
  all,
  results,
}: {
  items: Item[];
  all?: boolean;
  results?: boolean;
}) => {
  const { last_items, all_items, items_results } = ITEMS_CONTENT;

  return (
    <div className="grid w-full gap-2 place-items-center">
      {!results ? (
        <h2 className="text-2xl">{!all ? last_items : all_items}</h2>
      ) : null}
      {results ? <h2 className="text-2xl">{items_results}</h2> : null}
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 p-2 animate-in">
        {items?.map((item) => <ItemPreview item={item} key={item.id} />)}
      </div>
    </div>
  );
};

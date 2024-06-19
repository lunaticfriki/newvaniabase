import { Item } from './types';
import { ItemPreview } from './item-preview';

interface Props {
  items: Item[];
}

export const ItemsPreview = ({ items }: Props) => {
  return (
    <div className="grid w-full h-full gap-2 place-items-center">
      <h2 className="text-2xl">Last items</h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-2 p-2">
        {items?.map((item) => (
          <ItemPreview item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

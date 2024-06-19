import { ItemPreview } from './item-preview';
import { Item } from './types';

interface Props {
  items: Item[];
}

export const ItemsPreview = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap w-full gap-2 p-2">
      {items?.map((item) => (
        <ItemPreview item={item} key={item.id} />
      ))}
    </div>
  );
};

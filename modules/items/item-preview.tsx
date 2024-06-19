import { Item } from './types';

interface Props {
  item: Item;
}

export const ItemPreview = ({ item }: Props) => {
  return (
    <div key={item.id} className="m-4">
      <img src={item.cover} alt={item.title} className="w-[300px]" />
      <p>{item.title}</p>
    </div>
  );
};

import { Item } from './types';

interface Props {
  item: Item;
}

export const ItemPreview = ({ item }: Props) => {
  return (
    <div key={item.id}>
      <img src={item.cover} alt={item.title} className="w-[300px] rounded-lg" />
      <p>{item.title}</p>
    </div>
  );
};

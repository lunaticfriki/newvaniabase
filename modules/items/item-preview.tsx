import { Item } from './types';

interface Props {
  item: Item;
}

export const ItemPreview = ({ item }: Props) => {
  return (
    <div
      key={item.id}
      className="flex flex-col justify-between h-[400px] w-[300px] m-4 hover:cursor-pointer transition-all group"
    >
      <img
        src={item.cover}
        alt={item.title}
        className="w-full h-full transition-all group-hover:hue-rotate-90"
      />
      <p className="w-full py-4 text-shadow shadow-[var(--secondary)] text-xl text-end">
        {item.title}
      </p>
    </div>
  );
};

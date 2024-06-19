import { ITEMS_CONTENT } from '@/content';
import { Item } from '@/modules';

interface Props {
  item: Item;
}

export const ItemDetail = ({ item }: Props) => {
  const { completed, incomplete } = ITEMS_CONTENT;

  return (
    <div className="w-[90%] lg:w-[550px] text-end px-2 py-4">
      <h2 className="text-3xl">{item.title}</h2>
      <p className="text-[var(--primary)] text-2xl">{item.author}</p>
      <img
        src={item.cover}
        alt={item.title}
        className="w-full my-4 transition-all group-hover:hue-rotate-90"
      />
      <p className="mb-4">{item.description}</p>
      <p>
        {item.publisher} - <label className="uppercase">{item.topic}</label>
      </p>
      {/* TODO: TAGS
   <p>{item.tags}</p>  */}
      <span>{item.completed ? completed : incomplete}</span>
    </div>
  );
};

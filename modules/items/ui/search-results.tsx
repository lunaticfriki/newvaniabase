import { BackButton, Item, ItemsPreview } from '@/modules';

export const SearchResults = async ({ items }: { items: Item[] }) => {
  return (
    <div className="grid h-full place-content-center">
      <ItemsPreview items={items} results />
      <BackButton />
    </div>
  );
};

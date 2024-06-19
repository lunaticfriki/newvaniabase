import { ItemsPreview, useGetitems } from '@/modules';

export default async function ProtectedPage() {
  const items = await useGetitems();

  return (
    <div className="grid w-full h-full place-items-center place-content-center">
      <div className="flex flex-wrap w-full gap-2 p-2">
        {!items.length ? (
          <p className="flex items-center justify-center w-full h-full">
            Sorry, no items yet
          </p>
        ) : (
          <ItemsPreview items={items} />
        )}
      </div>
    </div>
  );
}

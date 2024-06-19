import { BackButton, ItemDetail, useGetItemBySlug } from '@/modules';

import { ITEMS_CONTENT } from '@/content';

export default async function ItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const { no_data } = ITEMS_CONTENT;
  const item = await useGetItemBySlug(params);

  if (!item)
    return (
      <div className="grid h-full place-items-center place-content-center">
        <p>{no_data}</p>
        <BackButton />
      </div>
    );

  return <ItemDetail item={item} />;
}

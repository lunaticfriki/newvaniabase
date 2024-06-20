import { Itemlist, useGetItems } from '@/modules';

export default async function ItemsPage() {
  const items = await useGetItems(true);

  return <Itemlist items={items} all />;
}

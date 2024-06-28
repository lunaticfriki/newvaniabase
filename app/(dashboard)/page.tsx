import { Itemlist, useGetItems } from '@/modules';

export default async function ProtectedPage() {
  const items = await useGetItems();

  return <Itemlist items={items} />;
}

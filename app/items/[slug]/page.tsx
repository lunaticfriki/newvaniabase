import { PATHS } from '@/content';
import { ItemDetail, type Item } from '@/modules';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export default async function ItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClientServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(PATHS.login);
  }

  const { data } = await supabase
    .from('items')
    .select()
    .eq('slug', params.slug)
    .filter('owner', 'eq', user.id);

  if (!data || !data.length) return <p className="text-2xl">No data</p>;

  const item = data[0] as Item;

  return <ItemDetail item={item} />;
}

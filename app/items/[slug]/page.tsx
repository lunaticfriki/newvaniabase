import type { Item } from '@/modules';
import { PATHS } from '@/content';
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

  return (
    <div className="w-[90%] lg:w-[550px] text-end">
      <h2 className="text-3xl">{item.title}</h2>
      <p className="text-[var(--primary)] text-2xl">{item.author}</p>
      <img
        src={item.cover}
        alt={item.title}
        className="w-full my-4 transition-all group-hover:hue-rotate-90"
      />
      <p>{item.description}</p>
      <p>
        {item.publisher} - <label className="uppercase">{item.topic}</label>
      </p>
      {/* TODO: TAGS
       <p>{item.tags}</p>  */}
      <span>{item.completed ? 'Completed' : 'Uncompleted'}</span>
    </div>
  );
}

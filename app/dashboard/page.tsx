import type { Item } from '@/modules';
import { ItemsPreview } from '@/modules';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
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
    .filter('owner', 'eq', user.id);

  const items: Item[] = data as Item[];

  return (
    <div className="grid w-full">
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

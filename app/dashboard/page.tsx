import { ItemsPreview, Navigation } from '@/modules';

import type { Item } from '@/modules/items/types';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  const { data } = await supabase
    .from('items')
    .select()
    .filter('owner', 'eq', user.id);

  const items: Item[] = data as Item[];

  return (
    <div className="grid w-full place-content-center place-items-center">
      <Navigation />
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

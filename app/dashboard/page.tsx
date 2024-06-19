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

  const { data } = await supabase.from('items').select();

  const items = data as Item[];

  return (
    <div className="grid w-full place-content-center place-items-center">
      <Navigation />
      <div className="flex flex-wrap w-full gap-2 p-2">
        <ItemsPreview items={items} />
      </div>
    </div>
  );
}

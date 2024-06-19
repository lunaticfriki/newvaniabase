import { Navigation } from '@/modules/shared/Navigation';
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

  const { data: items } = await supabase.from('items').select();

  return (
    <div className="grid w-full place-content-center place-items-center">
      <Navigation />
      <div className="flex flex-wrap w-full gap-2 p-2">
        {items?.map((item) => (
          <div key={item.id}>
            <img
              src={item.cover}
              alt={item.title}
              className="w-[300px] rounded-lg"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

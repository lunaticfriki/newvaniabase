import type { Item } from '../types';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export const useGetitems = async () => {
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

  return items;
};

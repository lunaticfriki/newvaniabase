import type { Item } from '../types/item-types';
import { LAST_ITEMS_LIMIT } from '../constants';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export const useGetItems = async (all?: boolean) => {
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
    .filter('owner', 'eq', user.id)
    .limit(!all ? LAST_ITEMS_LIMIT : Infinity)
    .order('created_at', { ascending: false });

  const items: Item[] = data as Item[];

  return items;
};

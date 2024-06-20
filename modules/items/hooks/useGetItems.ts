import type { Item } from '../types/item-types';
import { LAST_ITEMS_LIMIT } from '../constants';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

/**
 * Fetch items by user id. If user is not logged in, redirects to login page.
 * @param {boolean} all - Fetch all items or just the limited list.
 * @returns {Promise<Item[]>} - A promise that resolves to an array of items. If the user is not logged in, this function will redirect to the login page and the promise will never resolve.
 * @throws {Error} - Throws an error if there is a problem with the Supabase query.
 */
export const useGetItems = async (all?: boolean): Promise<Item[]> => {
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

import type { Item } from '../types/item-types';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

/**
 * Fetch an item by its slug. If user is not logged in, redirects to login page.
 * @param {string} slug - The slug of the item to fetch.
 * @returns {Promise<Item | null>} - A promise that resolves to the item or null if the item is not found. If the user is not logged in, this function will redirect to the login page and the promise will never resolve.
 * @throws {Error} - Throws an error if there is a problem with the Supabase query.
 */
export const useGetItemBySlug = async (slug: string): Promise<Item | null> => {
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
    .eq('slug', slug)
    .filter('owner', 'eq', user.id);

  if (!data || !data.length) {
    return null;
  } else return data[0] as Item;
};

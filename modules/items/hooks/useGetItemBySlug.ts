import type { Item } from '../types/item-types';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

/**
 * Description Fetch item by slug
 * @param {string} slug Slug of the item selected
 * @returns {Item | null} item
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

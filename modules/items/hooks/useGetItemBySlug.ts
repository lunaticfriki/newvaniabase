import type { Item } from '../types';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

interface Params {
  slug: string;
}

export const useGetItemBySlug = async (params: Params) => {
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

  if (!data || !data.length) {
    return null;
  } else return data[0] as Item;
};

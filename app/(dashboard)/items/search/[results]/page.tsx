import { PATHS, SearchFormContent } from '@/content';
import { SearchResults } from '@/modules';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export default async function ResultsPage({
  params,
}: {
  params: { results: string };
}) {
  const { no_results } = SearchFormContent;

  const slugs = params.results.split('%2C');

  const supabase = createClientServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(PATHS.login);
  }

  const res = await supabase.from('items').select().in('slug', slugs);

  if (!res.data) return <p>{no_results}</p>;

  return <SearchResults items={res.data} />;
}

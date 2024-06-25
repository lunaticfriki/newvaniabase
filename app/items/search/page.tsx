import { BackButton, Input, Item, LucideIcons } from '@/modules';
import { PATHS, SearchFormContent } from '@/content';

import { SubmitButton } from '@/app/login/submit-button';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export default function SearchItemPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const { search } = PATHS;
  const { name, placeholder, search_title, pending_message } =
    SearchFormContent;

  const searchItem = async (formData: FormData): Promise<Item[]> => {
    'use server';

    const word = formData.get(name) as string;
    const supabase = createClientServer();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect(PATHS.login);
    }

    const { data, error } = await supabase
      .from('items')
      .select()
      .filter('owner', 'eq', user.id)
      .textSearch('search_item_multiple', word);

    if (error) {
      return redirect(`${search}?message=No item found for "${word}"`);
    }

    if (!data.length) {
      return redirect(`${search}?message=No item found for "${word}"`);
    }

    const slugs: string[] = data.map((item) => item.slug);

    return redirect(`${search}/${slugs.join(',')}`);
  };

  return (
    <div className="grid w-full h-full gap-2 px-8 place-content-center place-items-center sm:max-w-md">
      <h2 className="text-2xl text-center">{search_title}</h2>
      <form className="flex flex-col justify-center w-full gap-2 animate-in">
        <div className="flex gap-2">
          <Input name={name} placeholder={placeholder} required />
          <SubmitButton
            formAction={searchItem}
            className="hover:text-[var(--primary)] transition-all"
            type="submit"
            pendingText={pending_message}
          >
            <LucideIcons.search />
          </SubmitButton>
        </div>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-foreground/10">
            {searchParams.message}
          </p>
        )}
        <BackButton />
      </form>
    </div>
  );
}

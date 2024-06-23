import { SubmitButton } from '@/app/login/submit-button';
import { BackButton, Input, LucideIcons } from '@/modules';

import { PATHS, SearchFormContent } from '@/content';
import { createClientServer } from '@/utils';
import { redirect } from 'next/navigation';

export default function SearchItemPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const { search } = PATHS;
  const { name, placeholder } = SearchFormContent;

  const searchItem = async (formData: FormData) => {
    'use server';

    const word = formData.get(name) as string;
    const supabase = createClientServer();

    const { data, error } = await supabase
      .from('items')
      .select()
      .textSearch('title', word);

    if (error) {
      return redirect(`${search}?message=No item found for "${word}"`);
    }

    if (!data.length) {
      return redirect(`${search}?message=No item found for "${word}"`);
    }

    return redirect(`/items/${data[0].slug}`);
  };

  return (
    <div className="grid w-full h-full gap-2 px-8 place-content-center place-items-center sm:max-w-md">
      <h2 className="text-2xl text-center">Search</h2>
      <form className="flex flex-col justify-center w-full gap-2 animate-in">
        <BackButton />
        <div className="flex gap-2">
          <Input name={name} placeholder={placeholder} required />{' '}
          <SubmitButton
            formAction={searchItem}
            className="hover:text-[var(--primary)] transition-all"
            type="submit"
            pendingText="Searching... Seek and Destroy!"
          >
            <LucideIcons.search />
          </SubmitButton>
        </div>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-foreground/10">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}

import { BackButton, Input, LucideIcons } from '@/modules';
import { ITEMS_CONTENT, SearchFormContent } from '@/content';

import { SubmitButton } from '@/app/login/submit-button';

export default function AddNewItemPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const { add_new_item } = ITEMS_CONTENT;

  return (
    <div className="grid w-full h-full gap-2 px-8 place-content-center place-items-center sm:max-w-md">
      <h2 className="text-2xl text-center">{add_new_item}</h2>
      <form className="flex flex-col justify-center w-full gap-2 animate-in">
        <div className="flex gap-2">
          <Input name="title" placeholder="Title" required />
        </div>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-foreground/10">
            {searchParams.message}
          </p>
        )}
        <SubmitButton
          className="hover:text-[var(--primary)] transition-all flex items-center gap-2 justify-center"
          type="submit"
          pendingText="Adding..."
        >
          Add new item <LucideIcons.new />
        </SubmitButton>
        <BackButton />
      </form>
    </div>
  );
}

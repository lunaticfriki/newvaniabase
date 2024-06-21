import { BackButton, Input, LucideIcons } from '@/modules';

import { SearchFormContent } from '@/content';

export default function SearchItemPage() {
  const { name, placeholder } = SearchFormContent;

  return (
    <div className="grid grid-rows-[auto,1fr] w-full h-full gap-2 px-8 sm:max-w-md">
      <h2 className="text-2xl text-center">Search</h2>
      <form className="flex flex-col justify-center w-full gap-2 animate-in">
        <BackButton />
        <div className="flex gap-2">
          <Input name={name} placeholder={placeholder} required />{' '}
          <button
            className="hover:text-[var(--primary)] transition-all"
            type="submit"
          >
            <LucideIcons.search />
          </button>
        </div>
      </form>
    </div>
  );
}

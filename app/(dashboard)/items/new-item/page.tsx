import { BackButton, Input, LucideIcons, Select, Textarea } from '@/modules';
import { CategoryListContent, ITEMS_CONTENT, NewItemForm } from '@/content';

import { SubmitButton } from '@/app/login/submit-button';

export default function AddNewItemPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const { add_new_item } = ITEMS_CONTENT;

  // TODO: Move form to an independent component

  return (
    <div className="grid w-full h-full gap-2 place-content-center place-items-center">
      <h2 className="text-2xl text-center">{add_new_item}</h2>
      <form className="flex flex-col justify-center w-full gap-2 animate-in">
        <div className="flex flex-col gap-2">
          {NewItemForm.map((el) => (
            <Input
              key={el.name}
              name={el.name}
              placeholder={el.placeholder}
              required={el.required}
            />
          ))}
          <Select name="category">
            {CategoryListContent.map((category) => (
              <option value={category.value} key={category.value}>
                {category.name}
              </option>
            ))}
          </Select>
          <Input type="file" name="cover" />
          <Textarea
            name="description"
            placeholder="Description"
            rows={20}
          ></Textarea>
          <div className="flex justify-end w-full gap-2">
            <label htmlFor="completed" className="cursor-pointer">
              Completed
            </label>
            {/*TODO: Style checkbox*/}
            <Input
              type="checkbox"
              name="completed"
              id="completed"
              className="cursor-pointer"
            />
          </div>
        </div>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-foreground/10">
            {searchParams.message}
          </p>
        )}
        <SubmitButton
          className="px-4 py-2 mb-2 bg-[var(--primary)] rounded-md flex justify-center items-center"
          type="submit"
          pendingText="Adding..."
          disabled
        >
          Add new item <LucideIcons.new />
        </SubmitButton>
        <BackButton />
      </form>
    </div>
  );
}

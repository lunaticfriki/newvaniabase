export const Select = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <select
      name={name}
      className="px-4 py-2 border rounded-md bg-inherit w-[350px]"
    >
      <option value="" hidden>
        Select category
      </option>
      {children}
    </select>
  );
};

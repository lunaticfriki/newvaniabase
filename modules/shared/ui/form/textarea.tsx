interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export const Textarea = ({
  name,
  placeholder,
  required,
  rows = 10,
}: InputProps) => {
  return (
    <textarea
      className="px-4 py-2 border rounded-md bg-inherit w-[350px]"
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
    />
  );
};

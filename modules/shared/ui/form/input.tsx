interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
}

export const Input = ({ name, placeholder, required }: InputProps) => {
  return (
    <input
      className="px-4 py-2 border rounded-md bg-inherit w-[350px]"
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

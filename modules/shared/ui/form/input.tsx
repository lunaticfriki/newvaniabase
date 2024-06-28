interface InputProps {
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  id?: string;
  className?: string;
}

export const Input = ({
  name,
  placeholder,
  required,
  type = 'text',
  id,
  className = '',
}: InputProps) => {
  return (
    <input
      className={`px-4 py-2 border rounded-md bg-inherit ${className}`}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      id={id}
    />
  );
};

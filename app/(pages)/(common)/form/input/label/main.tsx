export interface InputLabelProps extends React.ComponentPropsWithoutRef<"label"> {
    children: React.ReactNode;
}

export function FormInputLabel({ children, ...props }: InputLabelProps) {
  return (
    <label
      className="block mb-2 text-sm font-medium text-white"
      {...props}
    >
      {children}
    </label>
  );
}

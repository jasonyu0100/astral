export interface InputProps extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

export function FormCheckboxLabel({ children, ...props }: InputProps) {
  return (
    <div className="ml-3 text-sm">
      <label
        className="font-medium text-gray-500 dark:text-gray-400"
        {...props}
      >
        {children}
      </label>
    </div>
  );
}

export interface InputProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export function FormDescriptor({ children, ...props }: InputProps) {
  return (
    <div
      className="text-sm font-medium text-gray-900 dark:text-white"
      {...props}
    >
      {children}
    </div>
  );
}

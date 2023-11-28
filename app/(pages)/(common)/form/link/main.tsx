export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function FormLink({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      {...props}
    >
      {children}
    </a>
  );
}

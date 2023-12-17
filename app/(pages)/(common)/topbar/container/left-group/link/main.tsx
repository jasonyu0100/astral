export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <a
      className="block p-2 text-white"
      aria-current="page"
      {...props}
    >
      {children}
    </a>
  );
}

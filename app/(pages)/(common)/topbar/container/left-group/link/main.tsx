export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <a
      className="text-white"
      aria-current="page"
      {...props}
    >
      {children}
    </a>
  );
}

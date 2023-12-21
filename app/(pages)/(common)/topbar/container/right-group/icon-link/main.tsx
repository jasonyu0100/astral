export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {

  children: React.ReactNode;
}

export function TopbarIconLink({ children, ...props }: InputProps) {
  return (
    <a
      className="text-gray-600 hover:text-white font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
      {...props}
    >
      {children}
    </a>
  );
}

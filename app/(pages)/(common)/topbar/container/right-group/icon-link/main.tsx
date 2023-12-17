export interface InputProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function TopbarIconLink({ children, ...props }: InputProps) {
  return (
    <button
      type="button"
      className="text-gray-600 hover:text-white font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
      {...props}
    >
      {children}
    </button>
  );
}

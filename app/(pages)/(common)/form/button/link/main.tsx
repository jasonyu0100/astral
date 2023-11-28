export interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function ButtonLink({ children, ...props }: InputProps) {
  return (
    <a
      className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      {...props}
    >
      {children}
    </a>
  );
}

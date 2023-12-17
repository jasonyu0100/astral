export interface TabProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function Tab({
  children,
  ...props
}: TabProps) {
  return (
    <a {...props} className="flex flex-col items-start w-[9rem]">
      {children}
    </a>
  );
}

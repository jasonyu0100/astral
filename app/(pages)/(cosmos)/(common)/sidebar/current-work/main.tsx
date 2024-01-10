interface SidebarCurrentWorkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export function SidebarCurrentWork({
  children,
  ...props
}: SidebarCurrentWorkProps) {
  return (
    <a
      className="self-stretch justify-start items-center gap-[1rem] inline-flex w-full h-[4rem]"
      {...props}
    >
      <div className="flex flex-row w-full h-full items-center space-x-[1rem]">
        {children}
      </div>
    </a>
  );
}

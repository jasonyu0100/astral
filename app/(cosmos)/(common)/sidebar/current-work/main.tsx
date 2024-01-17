import { LinkInputProps } from "@/(common)/types/main";

interface SidebarCurrentWorkProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarCurrentWork({
  children,
  ...props
}: SidebarCurrentWorkProps) {
  return (
    <a className="w-full h-[3rem]" {...props}>
      <div className="flex flex-row w-full h-full items-center space-x-[1rem]">
        {children}
      </div>
    </a>
  );
}

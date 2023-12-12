import SidebarIndicatorBlueJewel from "./jewel/blue/main";
import SidebarIndicatorText from "./text/main";

export interface SidebarIndicatorProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export default function SidebarIndicator({
  children,
  ...props
}: SidebarIndicatorProps) {
  return (
    <a
      {...props}
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      {children}
    </a>
  );
}

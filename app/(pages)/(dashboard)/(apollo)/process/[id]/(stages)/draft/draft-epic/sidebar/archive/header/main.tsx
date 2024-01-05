import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

export function DraftSidebarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full justify-between">
      {children}
    </div>
  );
}

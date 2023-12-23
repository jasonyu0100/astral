import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftControllerTopRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center flex-shrink-0 w-full h-[60px] px-[1rem] justify-between">
      {children}
    </div>
  );
}

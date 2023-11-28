import DraftControllerBottomLeft from "./left/main";
import DraftControllerBottomRight from "./right/main";

export default function DraftControllerBottom({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row h-[500px] w-full flex-shrink-0">{children}</div>;
}

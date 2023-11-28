import DraftControllerTopLeft from "./left/main";
import DraftControllerTopRight from "./right/main";

export default function DraftControllerTop({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full h-[200px] flex-shrink-0 border-b-2 border-slate-500">
        {children}
    </div>
  );
}

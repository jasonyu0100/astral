import DraftConstellation from "./space/constellation/main";
import DraftSpace from "./space/main";
import DraftStoreRow from "./store-row/main";

export default function DraftRightContainer({children}: {children: React.ReactNode}) {
  return (
    <div className={`flex flex-col h-full w-[840px] bg-slate-800`}>
      {children}
    </div>
  );
}

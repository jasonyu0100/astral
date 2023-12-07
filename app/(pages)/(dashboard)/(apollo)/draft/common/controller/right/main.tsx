import DraftConstellation from "../../constellation/main";
import ConstellationSpace from "./constellation-space/main";
import DraftStoreRow from "./store-row/main";

export default function RightContainer({children}: {children: React.ReactNode}) {
  return (
    <div className={`flex flex-col h-full w-[840px] bg-slate-800`}>
      {children}
    </div>
  );
}

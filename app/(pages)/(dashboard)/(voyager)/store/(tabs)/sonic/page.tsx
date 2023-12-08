"use client";

import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import VisualStoreCard from "../../common/card/visual/main";

export default function StoreVisualPage() {
  return (
    <DashboardGuideWrapper>
      <div className="w-full columns-3 gap-[20px] p-[20px] rounded-[10px]  border border-slate-200 border-opacity-30">
        <VisualStoreCard src="/voyager/store/1.png"/>
        <VisualStoreCard src="/voyager/store/2.png"/>
        <VisualStoreCard src="/voyager/store/3.png"/>
        <VisualStoreCard src="/voyager/store/4.png"/>
        <VisualStoreCard src="/voyager/store/5.png"/>
        <VisualStoreCard src="/voyager/store/6.png"/>
      </div>
      <DashboardGuideContainer>
        <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
          <p className="text-slate-500 text-xl font-bold uppercase">
            MEMOS
          </p>
          <p className="text-slate-500 text-xl font-bold uppercase">
            SONGS
          </p>
          <p className="text-slate-500 text-xl font-bold uppercase">
            SOUNDS
          </p>
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

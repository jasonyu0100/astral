"use client";

import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import TextualStoreCard from "../common/card/textual/main";
import StoreDivider from "../common/divider/main";
import StoreGroup from "../common/group/main";

export default function StoreVisualPage() {
  return (
    <DashboardGuideWrapper>
      <div className="flex flex-col">
        <StoreGroup>
          <TextualStoreCard src="/voyager/store/1.png" />
          <TextualStoreCard src="/voyager/store/2.png" />
          <TextualStoreCard src="/voyager/store/3.png" />
          <TextualStoreCard src="/voyager/store/4.png" />
          <TextualStoreCard src="/voyager/store/5.png" />
          <TextualStoreCard src="/voyager/store/6.png" />
        </StoreGroup>
        <StoreDivider />
        <StoreGroup>
          <TextualStoreCard src="/voyager/store/1.png" />
          <TextualStoreCard src="/voyager/store/2.png" />
          <TextualStoreCard src="/voyager/store/3.png" />
          <TextualStoreCard src="/voyager/store/4.png" />
          <TextualStoreCard src="/voyager/store/5.png" />
          <TextualStoreCard src="/voyager/store/6.png" />
        </StoreGroup>
      </div>

      <DashboardGuideContainer>
        <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
          <p className="text-slate-500 text-xl font-bold uppercase">THOUGHTS</p>
          <p className="text-slate-500 text-xl font-bold uppercase">QUOTES</p>
          <p className="text-slate-500 text-xl font-bold uppercase">IDEAS</p>
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

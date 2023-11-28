import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import CraftBookContainer from "../common/book/main";
import CraftTableContainer from "../common/book/table/container/main";
import CraftTableRow from "../common/book/table/row/main";
import CraftSection from "../common/book/table/section/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import { craftStyleSections } from "./data";

export default function CraftStylePage() {
  return (
    <DashboardGuideWrapper>
      <CraftBookContainer>
        {craftStyleSections.map((sectionData) => (
          <>
            <CraftSection {...sectionData} />
            <CraftTableContainer>
              {sectionData.rows.map((data) => (
                <CraftTableRow {...data} />
              ))}
            </CraftTableContainer>
          </>
        ))}
      </CraftBookContainer>
      <DashboardGuideContainer>
        <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
          <p className="text-slate-500 text-xl font-bold uppercase">Brand</p>
          <p className="text-slate-700 text-xl font-bold uppercase">Idea</p>
          <p className="text-slate-700 text-xl font-bold uppercase">Symbol</p>
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

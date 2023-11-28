import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import CraftBookContainer from "../common/book/main";
import CraftTableContainer from "../common/book/table/container/main";
import CraftTableRow from "../common/book/table/row/main";
import CraftSection from "../common/book/table/section/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import { craftWordsLinesData } from "./data";

export default function CraftStylePage() {
  return (
    <DashboardGuideWrapper>
      <CraftBookContainer>
        {craftWordsLinesData.map((sectionData) => (
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
          <p className="text-slate-500 text-xl font-bold uppercase">Lines</p>
          <p className="text-slate-700 text-xl font-bold uppercase">Labels</p>
          <p className="text-slate-700 text-xl font-bold uppercase">Lingo</p>
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

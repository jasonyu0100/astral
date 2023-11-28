import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import CraftBookContainer from "../common/book/main";
import CraftTableContainer from "../common/book/table/container/main";
import CraftTableRow from "../common/book/table/row/main";
import CraftSection from "../common/book/table/section/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import { craftStorySections } from "./data";

export default function CraftStoryPage() {
  return (
    <DashboardGuideWrapper>
      <CraftBookContainer>
        {craftStorySections.map((sectionData) => (
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
          {craftStorySections.map((data) => (
            <p className="text-slate-500 text-xl font-bold uppercase">
              {data.title}
            </p>
          ))}
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

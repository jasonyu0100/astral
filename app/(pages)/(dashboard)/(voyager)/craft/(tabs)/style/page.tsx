import CraftBookContainer from "../../common/controller/main";
import CraftTableContainer from "../../common/controller/table/container/main";
import CraftTableRow from "../../common/controller/table/row/main";
import CraftSection from "../../common/controller/table/section/main";
import CraftGuideController from "../../common/guide/main";
import CraftGuideBody from "../../common/guide/body/main";
import CraftGuideLink from "../../common/guide/body/link/main";
import CraftGuideWrapper from "../../common/guide/wrapper/main";
import { craftStyleSections } from "./data";

export default function CraftStylePage() {
  return (
    <CraftGuideWrapper>
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
      <CraftGuideController>
        <CraftGuideBody>
          {craftStyleSections.map((data) => (
            <CraftGuideLink>{data.title}</CraftGuideLink>
          ))}
        </CraftGuideBody>
      </CraftGuideController>
    </CraftGuideWrapper>
  );
}

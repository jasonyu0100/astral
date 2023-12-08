import CraftBookContainer from "../../common/book/main";
import CraftTableContainer from "../../common/book/table/container/main";
import CraftTableRow from "../../common/book/table/row/main";
import CraftSection from "../../common/book/table/section/main";
import CraftGuideController from "../../common/guide/main";
import CraftGuideWrapper from "../../common/guide/wrapper/main";
import CraftGuideBody from "../../common/guide/body/main";
import CraftGuideLink from "../../common/guide/body/link/main";
import { craftStorySections } from "./data";

export default function CraftStoryPage() {
  return (
    <CraftGuideWrapper>
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
      <CraftGuideController>
        <CraftGuideBody>
          {craftStorySections.map((data) => (
            <CraftGuideLink>
              {data.title}
            </CraftGuideLink>
          ))}
        </CraftGuideBody>
      </CraftGuideController>
    </CraftGuideWrapper>
  );
}

import CraftTableController from "./common/controller/main";
import CraftTableContainer from "./common/controller/table/container/main";
import CraftTableRow from "./common/controller/table/row/main";
import CraftSection from "./common/controller/table/section/main";
import CraftGuideController from "./common/guide/main";
import CraftGuideBody from "./common/guide/body/main";
import CraftGuideLink from "./common/guide/body/link/main";
import CraftGuideWrapper from "./common/guide/wrapper/main";
import { craftWordsLinesData } from "../../data/words/data";

export default function CraftTablePage() {
  return (
    <CraftGuideWrapper>
      <CraftTableController>
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
      </CraftTableController>
      <CraftGuideController>
        <CraftGuideBody>
          {craftWordsLinesData.map((data) => (
            <CraftGuideLink>
              {data.title}
            </CraftGuideLink>
          ))}
        </CraftGuideBody>
      </CraftGuideController>
    </CraftGuideWrapper>
  );
}

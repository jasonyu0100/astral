import CraftTableController from "./(common)/controller/main";
import CraftTableContainer from "./(common)/controller/table/container/main";
import CraftTableRow from "./(common)/controller/table/row/main";
import CraftTableSection from "./(common)/controller/table/section/main";
import { craftWordsLinesData } from "../../data/words/data";
import CraftCart from "../../(common)/cart/main";

export default function CraftTablePage() {
  return (
    <div className="w-full h-full space-x-[3rem] flex flex-row">
      <CraftTableController>
        {craftWordsLinesData.map((sectionData) => (
          <>
            <CraftTableSection {...sectionData} />
            <CraftTableContainer>
              {sectionData.rows.map((data) => (
                <CraftTableRow {...data} />
              ))}
            </CraftTableContainer>
          </>
        ))}
      </CraftTableController>
      <CraftCart />
    </div>
  );
}

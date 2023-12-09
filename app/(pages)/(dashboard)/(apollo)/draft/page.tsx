"use client";

import DraftConstellation from "./common/controller/right-container/space/constellation/main";
import DraftGuidePoint from "./common/controller/guide/point/main";
import DraftGuide from "./common/controller/guide/main";
import DraftLeftContainer from "./common/controller/left-container/main";
import DraftController from "./common/controller/main";
import DraftConstellationIndicator from "./common/controller/right-container/space/indicator/main";
import DraftSpace from "./common/controller/right-container/space/main";
import DraftRightContainer from "./common/controller/right-container/main";
import DraftStoreRow from "./common/controller/right-container/store-row/main";
import DraftWrapper from "./common/controller/wrapper/main";
import DraftLeftContainerAdd from "./common/controller/left-container/add/main";
import DraftStoreCol from "./common/controller/left-container/store-col/main";
import DraftStoreColItem from "./common/controller/left-container/store-col/item/main";
import DraftStoreRowItem from "./common/controller/right-container/store-row/item/main";

export default function ApolloDraftPage() {
  return (
    <DraftWrapper>
      <DraftController>
        <DraftLeftContainer>
          <DraftLeftContainerAdd />
          <DraftStoreCol>
            <DraftStoreColItem />
            <DraftStoreColItem />
          </DraftStoreCol>
        </DraftLeftContainer>
        <DraftRightContainer>
          <DraftStoreRow>
            <DraftStoreRowItem/>
          </DraftStoreRow>
          <DraftSpace>
            <DraftConstellation />
            <DraftConstellationIndicator />
          </DraftSpace>
        </DraftRightContainer>
      </DraftController>
      <DraftGuide>
        <DraftGuidePoint>Const0</DraftGuidePoint>
        <DraftGuidePoint>Const1</DraftGuidePoint>
        <DraftGuidePoint>Const2</DraftGuidePoint>
      </DraftGuide>
    </DraftWrapper>
  );
}

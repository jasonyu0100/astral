"use client";

import DraftConstellation from "./common/controller/left/space/constellation/main";
import DraftGuidePoint from "./common/controller/guide/point/main";
import DraftGuide from "./common/controller/guide/main";
import DraftRightContainer from "./common/controller/right/main";
import DraftController from "./common/controller/main";
import DraftConstellationIndicator from "./common/controller/left/space/indicator/main";
import DraftSpace from "./common/controller/left/space/main";
import DraftLeftContainer from "./common/controller/left/main";
import DraftStoreRow from "./common/controller/left/store-row/main";
import DraftWrapper from "./common/controller/wrapper/main";
import DraftLeftContainerAdd from "./common/controller/right/add/main";
import DraftStoreCol from "./common/controller/right/store-col/main";
import DraftStoreColItem from "./common/controller/right/store-col/item/main";
import DraftStoreRowItem from "./common/controller/left/store-row/item/main";
import DraftGuideWrapper from "./common/guide/wrapper/main";
import DraftGuideController from "./common/guide/main";
import DraftGuideBody from "./common/guide/body/main";
import DraftGuideLink from "./common/guide/body/link/main";

export default function ApolloDraftPage() {
  return (
    <DraftGuideWrapper>
      <DraftController>
        <DraftLeftContainer>
          <DraftStoreRow>
            <DraftStoreRowItem />
          </DraftStoreRow>
          <DraftSpace>
            <DraftConstellation />
            <DraftConstellationIndicator />
          </DraftSpace>
        </DraftLeftContainer>
        <DraftRightContainer>
          <DraftLeftContainerAdd />
          <DraftStoreCol>
            <DraftStoreColItem />
            <DraftStoreColItem />
            <DraftStoreColItem />
            <DraftStoreColItem />
            <DraftStoreColItem />
            <DraftStoreColItem />
          </DraftStoreCol>
        </DraftRightContainer>
      </DraftController>
      <DraftGuideController>
        <DraftGuideBody>
          <DraftGuideLink>Const0</DraftGuideLink>
          <DraftGuideLink>Const1</DraftGuideLink>
          <DraftGuideLink>Const2</DraftGuideLink>
        </DraftGuideBody>
      </DraftGuideController>
    </DraftGuideWrapper>
  );
}

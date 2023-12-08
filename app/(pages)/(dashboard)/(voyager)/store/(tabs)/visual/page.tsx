"use client";
import StoreVisualCard from "../../common/card/visual/main";
import StoreGuideWrapper from "../../common/guide/wrapper/main";
import StoreGuideController from "../../common/guide/main";
import StoreGuideBody from "../../common/guide/body/main";
import StoreGuideLink from "../../common/guide/body/link/main";
import StoreController from "../../common/controller/main";
import StoreGroup from "../../common/controller/group/main";

export default function StoreVisualPage() {
  return (
    <StoreGuideWrapper>
      <StoreController>
        <StoreGroup>
          <StoreVisualCard src="/voyager/store/1.png" />
          <StoreVisualCard src="/voyager/store/2.png" />
          <StoreVisualCard src="/voyager/store/3.png" />
          <StoreVisualCard src="/voyager/store/4.png" />
          <StoreVisualCard src="/voyager/store/5.png" />
          <StoreVisualCard src="/voyager/store/6.png" />
        </StoreGroup>
      </StoreController>
      <StoreGuideController>
        <StoreGuideBody>
          <StoreGuideLink>NATURE</StoreGuideLink>
          <StoreGuideLink>OCEAN</StoreGuideLink>
          <StoreGuideLink>CITY</StoreGuideLink>
        </StoreGuideBody>
      </StoreGuideController>
    </StoreGuideWrapper>
  );
}

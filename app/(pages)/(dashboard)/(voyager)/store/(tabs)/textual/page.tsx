"use client";
import StoreTextualCard from "../../common/card/textual/main";
import StoreDivider from "../../common/controller/divider/main";
import StoreGroup from "../../common/controller/group/main";
import StoreGuideWrapper from "../../common/guide/wrapper/main";
import StoreGuideController from "../../common/guide/main";
import StoreGuideBody from "../../common/guide/body/main";
import StoreGuideLink from "../../common/guide/body/link/main";
import StoreController from "../../common/controller/main";

export default function StoreVisualPage() {
  return (
    <StoreGuideWrapper>
      <StoreController>
        <StoreGroup>
          <StoreTextualCard src="/voyager/store/1.png" />
          <StoreTextualCard src="/voyager/store/2.png" />
          <StoreTextualCard src="/voyager/store/3.png" />
          <StoreTextualCard src="/voyager/store/4.png" />
          <StoreTextualCard src="/voyager/store/5.png" />
          <StoreTextualCard src="/voyager/store/6.png" />
        </StoreGroup>
        <StoreDivider />
        <StoreGroup>
          <StoreTextualCard src="/voyager/store/1.png" />
          <StoreTextualCard src="/voyager/store/2.png" />
          <StoreTextualCard src="/voyager/store/3.png" />
          <StoreTextualCard src="/voyager/store/4.png" />
          <StoreTextualCard src="/voyager/store/5.png" />
          <StoreTextualCard src="/voyager/store/6.png" />
        </StoreGroup>
      </StoreController>
      <StoreGuideController>
        <StoreGuideBody>
          <StoreGuideLink>THOUGHTS</StoreGuideLink>
          <StoreGuideLink>QUOTES</StoreGuideLink>
          <StoreGuideLink>IDEAS</StoreGuideLink>
        </StoreGuideBody>
      </StoreGuideController>
    </StoreGuideWrapper>
  );
}

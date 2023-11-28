"use client";
import DraftControllerBottomLeft from "./common/controller/bottom/left/main";
import DraftControllerBottom from "./common/controller/bottom/main";
import DraftControllerBottomRight from "./common/controller/bottom/right/main";
import ControllerContainer from "./common/controller/main";
import DraftControllerTopLeft from "./common/controller/top/left/main";
import DraftControllerTop from "./common/controller/top/main";
import DraftControllerTopRight from "./common/controller/top/right/main";
import DraftPolaroid from "./common/polaroid/main";

export default function ApolloDraft() {
  return (
    <>
      <ControllerContainer>
        <DraftControllerTop>
          <DraftControllerTopLeft />
          <DraftControllerTopRight />
        </DraftControllerTop>
        <DraftControllerBottom>
          <DraftControllerBottomLeft />
          <DraftControllerBottomRight />
        </DraftControllerBottom>
      </ControllerContainer>
    </>
  );
}

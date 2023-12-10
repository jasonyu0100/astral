"use client";

import PillarsController from "../../common/controller/main";
import PillarsMasonryContainer from "../../common/controller/masonry/main";
import PillarsMuseumContainer from "../../common/controller/museum/main";
import PillarsMuseumRow from "../../common/controller/museum/row/main";
import PillarsGuideWrapper from "../../common/guide/wrapper/main";
import PillarsGuideController from "../../common/guide/main";
import PillarsGuideBody from "../../common/guide/body/main";
import PillarsGuideLink from "../../common/guide/body/link/main";
import { leadArtData } from "./data";
import MasonryMedia from "../../common/controller/masonry/media/main";

export default function PillarsLead() {
  return (
    <PillarsGuideWrapper>
      <PillarsController>
        <MasonryMedia src={"/voyager/pillars/lead/touch-c.png"} />
        <PillarsMasonryContainer>
          {leadArtData
            .map((data) => data.works)
            .flat(1)
            .map((data) => (
              <MasonryMedia src={data.src} />
            ))}
        </PillarsMasonryContainer>
        <PillarsMuseumContainer>
          {leadArtData
            .map((data) => data.works)
            .flat(1)
            .map((data) => (
              <PillarsMuseumRow {...data} />
            ))}
        </PillarsMuseumContainer>
      </PillarsController>
      <PillarsGuideController>
        <PillarsGuideBody>
          <PillarsGuideController>Bento</PillarsGuideController>
          {leadArtData.map((data) => (
            <PillarsGuideLink>{data.title}</PillarsGuideLink>
          ))}
        </PillarsGuideBody>
      </PillarsGuideController>
    </PillarsGuideWrapper>
  );
}

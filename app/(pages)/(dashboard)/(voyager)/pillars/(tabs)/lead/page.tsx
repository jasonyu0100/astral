"use client";

import PillarsArtContainer from "../../common/art-container/main";
import PillarsMasonryContainer from "../../common/masonry/main";
import PillarsMuseumContainer from "../../common/museum/main";
import PillarsMuseumRow from "../../common/museum/row/main";
import PillarsGuideWrapper from "../../common/guide/wrapper/main";
import PillarsGuideController from "../../common/guide/main";
import PillarsGuideBody from "../../common/guide/body/main";
import PillarsGuideLink from "../../common/guide/body/link/main";
import { leadArtData } from "./data";

export default function PillarsLead() {
  return (
    <PillarsGuideWrapper>
      <PillarsArtContainer>
        <PillarsMasonryContainer>
          {leadArtData
            .map((data) => data.works)
            .flat(1)
            .map((data) => (
              <img className="max-w-full rounded-lg mb-6" src={data.src} />
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
      </PillarsArtContainer>
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

"use client";

import PillarsController from "../../common/controller/main";
import PillarsMasonryContainer from "../../common/controller/masonry/main";
import PillarsMuseumRow from "../../common/controller/museum/row/main";
import PillarsGuideWrapper from "../../common/guide/wrapper/main";
import PillarsGuideController from "../../common/guide/main";
import PillarsGuideBody from "../../common/guide/body/main";
import PillarsGuideLink from "../../common/guide/body/link/main";
import PillarsMuseumContainer from "../../common/controller/museum/main";
import { inspireArtData } from "./data";
import MasonryMedia from "../../common/controller/masonry/media/main";
import { useState } from "react";

export default function PillarsInspire() {
  const dataSource = inspireArtData;
  const [section, changeSection] = useState("Summary");
  const sectionTitles = ["Summary", ...dataSource.map((data) => data.title)];
  const allWorks = dataSource.map((data) => data.works).flat(1);
  const getSectionWorks = () => {
    const sectionData = dataSource
      .filter((work) => work.title === section)
      .at(0);
    return sectionData?.works || [];
  };

  return (
    <PillarsGuideWrapper>
      <PillarsController>
        {section === "Summary" ? (
          <PillarsMasonryContainer>
            {allWorks.map((data) => (
              <MasonryMedia src={data.src} />
            ))}
          </PillarsMasonryContainer>
        ) : (
          <PillarsMuseumContainer>
            {getSectionWorks().map((work) => (
              <PillarsMuseumRow {...work} />
            ))}
          </PillarsMuseumContainer>
        )}
      </PillarsController>
      <PillarsGuideController>
        <PillarsGuideBody>
          <PillarsGuideController>Bento</PillarsGuideController>
          {sectionTitles.map((sectionTitle) => (
            <PillarsGuideLink onClick={() => changeSection(sectionTitle)}>
              {sectionTitle}
            </PillarsGuideLink>
          ))}
        </PillarsGuideBody>
      </PillarsGuideController>
    </PillarsGuideWrapper>
  );
}

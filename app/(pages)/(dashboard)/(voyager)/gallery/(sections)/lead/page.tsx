"use client";

import GalleryController from "../../common/controller/main";
import GalleryMasonryContainer from "../../common/controller/masonry/main";
import GalleryMuseumContainer from "../../common/controller/museum/main";
import GalleryMuseumRow from "../../common/controller/museum/row/main";
import GalleryGuideWrapper from "../../common/guide/wrapper/main";
import GalleryGuideController from "../../common/guide/main";
import GalleryGuideBody from "../../common/guide/body/main";
import GalleryGuideLink from "../../common/guide/body/link/main";
import MasonryMedia from "../../common/controller/masonry/media/main";
import { leadArtData } from "./data";
import { useState } from "react";

export default function GalleryLead() {
  const dataSource = leadArtData;
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
    <GalleryGuideWrapper>
      <GalleryController>
        {section === "Summary" ? (
          <GalleryMasonryContainer>
            {allWorks.map((data) => (
              <MasonryMedia src={data.src} />
            ))}
          </GalleryMasonryContainer>
        ) : (
          <GalleryMuseumContainer>
            {getSectionWorks().map((work) => (
              <GalleryMuseumRow {...work} />
            ))}
          </GalleryMuseumContainer>
        )}
      </GalleryController>
      <GalleryGuideController>
        <GalleryGuideBody>
          {sectionTitles.map((sectionTitle) => (
            <GalleryGuideLink onClick={() => changeSection(sectionTitle)}>
              {sectionTitle}
            </GalleryGuideLink>
          ))}
        </GalleryGuideBody>
      </GalleryGuideController>
    </GalleryGuideWrapper>
  );
}

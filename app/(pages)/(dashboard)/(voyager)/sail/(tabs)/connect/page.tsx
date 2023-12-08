"use client";

import SailArtContainer from "../../common/art-container/main";
import SailMasonryContainer from "../../common/masonry/main";
import SailMuseumContainer from "../../common/museum/main";
import SailMuseumRow from "../../common/museum/row/main";
import SailGuideWrapper from "../../common/guide/wrapper/main";
import SailGuideController from "../../common/guide/main";
import SailGuideBody from "../../common/guide/body/main";
import SailGuideLink from "../../common/guide/body/link/main";
import { connectArtData } from "./data";

export default function SailConnect() {
  return (
    <SailGuideWrapper>
      <SailArtContainer>
        <SailMasonryContainer>
          {connectArtData
            .map((data) => data.works)
            .flat(1)
            .map((data) => (
              <img className="max-w-full rounded-lg mb-6" src={data.src} />
            ))}
        </SailMasonryContainer>
        <SailMuseumContainer>
          {connectArtData
            .map((data) => data.works)
            .flat(1)
            .map((data) => (
              <SailMuseumRow {...data} />
            ))}
        </SailMuseumContainer>
      </SailArtContainer>
      <SailGuideController>
        <SailGuideBody>
          {connectArtData.map((data) => (
            <SailGuideLink>{data.title}</SailGuideLink>
          ))}
        </SailGuideBody>
      </SailGuideController>
    </SailGuideWrapper>
  );
}

"use client";

import ArtContainer from "../../common/archive/container/main";
import DashboardGuideWrapper from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/main";
import MastMasonryContainer from "../../common/masonry/main";
import MuseumContainer from "../../common/museum/main";
import MuseumRow from "../../common/museum/row/main";
import DashboardGuideContainer from "@/(pages)/(dashboard)/(common)/dashboard/content/guide/container/main";
import { inspireArtData } from "./data";

export default function VoyagerInspire() {
  return (
    <DashboardGuideWrapper>
      <ArtContainer>
        <MastMasonryContainer>
          {inspireArtData.map((data) => data.works).flat(1).map(data => (
            <img className="max-w-full rounded-lg mb-6" src={data.src} />
          ))}
        </MastMasonryContainer>
        <MuseumContainer>
          {inspireArtData.map((data) => data.works).flat(1).map(data => (
            <MuseumRow {...data} />
          ))}
        </MuseumContainer>
      </ArtContainer>
      <DashboardGuideContainer>
        <div className="w-full overflow-auto flex flex-col space-y-[50px] py-[60px] p-[30px]">
          <p className="text-slate-500 text-xl font-bold uppercase">Bento</p>
          {inspireArtData.map((data) => (
          <p className="text-slate-500 text-xl font-bold uppercase">{data.title}</p>
          ))}
        </div>
      </DashboardGuideContainer>
    </DashboardGuideWrapper>
  );
}

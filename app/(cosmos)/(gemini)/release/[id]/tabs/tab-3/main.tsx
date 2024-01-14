"use client"

import { Tab } from "@/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabText } from "@/(cosmos)/(common)/tabs/tabs-row/tab/text/main"
import { useContext } from "react";
import { ReleaseContext } from "../../layout";
import { releaseMap } from "../../map";
import { ReleaseTabStage } from "../main";
import { TabPurpleShard } from "@/(cosmos)/(common)/tabs/tabs-row/tab/shard/purple/main";

export function TabThree({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Three;
  const active = tab === tabText;

  return (
    <Tab href={releaseMap.release.id.three.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

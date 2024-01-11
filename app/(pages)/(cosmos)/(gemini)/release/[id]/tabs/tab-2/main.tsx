"use client"

import { Tab } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/text/main"
import { useContext } from "react";
import { ReleaseContext } from "../../layout";
import { releaseMap } from "../../map";
import { ReleaseTabStage } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.Two;
  const active = tab === tabText;

  return (
    <Tab href={releaseMap.release.id.two.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}

"use client";

import { Tab } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/text/main";
import { releaseMap } from "../../map";
import { ReleaseContext } from "../../layout";
import { useContext } from "react";
import { ReleaseTabStage } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const releaseContext = useContext(ReleaseContext);
  const tabText = ReleaseTabStage.One;
  const active = tab === tabText;

  return (
    <Tab href={releaseMap.release.id.one.link(releaseContext.releaseId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

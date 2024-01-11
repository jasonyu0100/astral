"use client"

import { Tab } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/text/main"
import { useContext } from "react";
import { SpaceContext } from "../../layout";
import { spaceMap } from "../../map";
import { SpaceTabStage } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const spaceContext = useContext(SpaceContext);
  const tabText = SpaceTabStage.Draft;
  const active = tab === tabText;

  return (
    <Tab href={spaceMap.space.id.draft.link(spaceContext.spaceId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}

"use client"

import { Tab } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabGreenShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/green/main";
import { TabText } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/text/main"
import { useContext } from "react";
import { ProcessContext } from "../../layout";
import { processMap } from "../../map";
import { ProcessTabStage } from "../main";

export function TabTwo({ tab }: { tab?: string }) {
  const processContext = useContext(ProcessContext);
  const tabText = ProcessTabStage.Draft;
  const active = tab === tabText;

  return (
    <Tab href={processMap.process.id.draft.link(processContext.processId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabGreenShard active={active} />
    </Tab>
  );
}

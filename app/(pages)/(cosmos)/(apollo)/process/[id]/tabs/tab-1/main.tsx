"use client";

import { Tab } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "@/(pages)/(cosmos)/(common)/tabs/tabs-row/tab/text/main";
import { processMap } from "../../map";
import { ProcessContext } from "../../layout";
import { useContext } from "react";
import { ProcessTabStage } from "../main";

export function TabOne({ tab }: { tab?: string }) {
  const processContext = useContext(ProcessContext);
  const tabText = ProcessTabStage.Storm;
  const active = tab === tabText;

  return (
    <Tab href={processMap.process.id.storm.link(processContext.processId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

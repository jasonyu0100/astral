"use client"

import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import { TabPurpleShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/purple/main";
import { TabText } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main"
import { ProcessContext } from "../../../layout";
import { useContext } from "react";
import { processMap } from "../../../map";

export function TabThree({ tab }: { tab?: string }) {
  const processContext = useContext(ProcessContext);
  const tabText = "Flow";
  const active = tab === tabText;

  return (
    <Tab href={processMap.process.id.flow.link(processContext.processId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabPurpleShard active={active} />
    </Tab>
  );
}

"use client"

import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import { TabOrangeShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/orange/main";
import { TabText } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main";
import { useContext } from "react";
import { ProcessContext, ProcessStage } from "../../layout";
import { processMap } from "../../map";

export function TabFour({ tab }: { tab?: string }) {
  const processContext = useContext(ProcessContext);
  const tabText = ProcessStage.Sea;
  const active = tab === tabText;

  return (
    <Tab href={processMap.process.id.sea.link(processContext.processId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabOrangeShard active={active} />
    </Tab>
  );
}

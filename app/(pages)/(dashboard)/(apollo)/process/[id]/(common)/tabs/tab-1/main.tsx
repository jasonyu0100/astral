"use client";

import { Tab } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/main";
import { TabBlueShard } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/shard/blue/main";
import { TabText } from "@/(pages)/(dashboard)/(common)/tabs/tabs-row/tab/text/main";
import { processMap } from "../../../map";
import { ProcessContext } from "../../../layout";
import { useContext } from "react";

export function TabOne({ tab }: { tab?: string }) {
  const processContext = useContext(ProcessContext);
  const tabText = "Storm";
  const active = tab === tabText;

  return (
    <Tab href={processMap.process.id.storm.link(processContext.processId)}>
      <TabText active={active}>{tabText}</TabText>
      <TabBlueShard active={active} />
    </Tab>
  );
}

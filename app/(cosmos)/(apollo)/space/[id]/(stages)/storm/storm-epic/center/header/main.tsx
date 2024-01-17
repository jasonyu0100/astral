import { borderStyles, containerStyles } from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";
import { HeaderAdd } from "./add/main";
import HeaderTitle from "./title/main";
import { HeaderAgent } from "./agent/main";
import { StormHeaderRight } from "./right/main";
import { StormHeaderMiddle } from "./middle/main";
import { StormHeaderLeft } from "./left/main";

export function StormHeader() {
  return (
    <Layer
      displayName={StormHeader.name}
      sizeStyle="h-[50px] w-full flex-shrink-0"
      className={`${containerStyles["row-center"]} px-[1rem] space-x-[1rem] justify-between`}
      borderStyle={borderStyles["border-b"]}
    >
      <StormHeaderLeft>
        <HeaderAgent>Chat GPT-3</HeaderAgent>
      </StormHeaderLeft>
      <StormHeaderMiddle>
        <HeaderTitle/>
      </StormHeaderMiddle>
      <StormHeaderRight>
        <HeaderAdd />
      </StormHeaderRight>
    </Layer>
  );
}

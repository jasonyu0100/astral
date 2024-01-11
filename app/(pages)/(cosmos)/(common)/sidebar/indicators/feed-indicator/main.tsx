import { feedMap } from "@/(pages)/(cosmos)/(voyager)/feed/map";
import { IndicatorGreenJewel } from "../indicator/jewel/green/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";
import { SidebarIndicatorType } from "../../main";

export function FeedIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Feed;
  const active = indicator === indicatorLabel;
  
  return (
    <>
      {minimised ? (
        <SidebarIndicator href={feedMap.feed.journal.link}>
          <IndicatorGreenJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={feedMap.feed.journal.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}

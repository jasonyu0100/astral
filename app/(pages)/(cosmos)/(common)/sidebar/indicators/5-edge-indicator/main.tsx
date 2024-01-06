import { IndicatorSilverJewel } from "../indicator/jewel/silver/main";
import { SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function SidebarEdgeIndicator({ indicator }: { indicator?: string }) {
  const indicatorLabel = "Record";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/edge/recent">
      <IndicatorSilverJewel active={active} />
      <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
    </SidebarIndicator>
  );
}

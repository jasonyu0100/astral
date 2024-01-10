import { recordMap } from "@/(pages)/(cosmos)/(voyager)/record/map";
import { IndicatorSilverJewel } from "../indicator/jewel/silver/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorFive({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Record";
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={recordMap.record.label.link}>
          <IndicatorSilverJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={recordMap.record.label.link}>
          <IndicatorSilverJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}

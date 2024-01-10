import { craftMap } from "@/(pages)/(cosmos)/(voyager)/craft/map";
import { IndicatorOrangeJewel } from "../indicator/jewel/orange/main";
import { IndicatorProps, SidebarIndicator } from "../indicator/main";
import { IndicatorText } from "../indicator/text/main";

export function IndicatorTwo({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = "Craft";
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={craftMap.craft.search.link}>
          <IndicatorOrangeJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={craftMap.craft.search.link}>
          <IndicatorOrangeJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}

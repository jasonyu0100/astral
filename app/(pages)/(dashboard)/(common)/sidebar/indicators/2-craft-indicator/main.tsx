import IndicatorOrangeJewel from "../indicator/jewel/orange/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function SidebarCraftIndicator({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Craft";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/craft/store">
      <IndicatorOrangeJewel active={active}/>
      <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
    </SidebarIndicator>
  );
}


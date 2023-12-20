import IndicatorOrangeJewel from "../indicator/jewel/orange/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function IndicatorTwo({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Craft";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/craft/search">
      <IndicatorOrangeJewel active={active}/>
      <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
    </SidebarIndicator>
  );
}


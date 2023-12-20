import IndicatorGreenJewel from "../indicator/jewel/green/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function IndicatorThree({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Board";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/board/view">
      <IndicatorGreenJewel active={active}/>
      <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
    </SidebarIndicator>
  );
}

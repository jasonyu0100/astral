import IndicatorBlueJewel from "../indicator/jewel/blue/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function IndicatorOne({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Works";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/works/now">
      <IndicatorBlueJewel active={active} />
      <IndicatorText active={active}>
        {indicatorLabel}
      </IndicatorText>
    </SidebarIndicator>
  );
}

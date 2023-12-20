import IndicatorPurpleJewel from "../indicator/jewel/purple/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function IndicatorFour({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Link";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/link/journal">
      <IndicatorPurpleJewel active={active} />
      <IndicatorText active={active}>
        {indicatorLabel}
      </IndicatorText>
    </SidebarIndicator>
  );
}

import IndicatorPurpleJewel from "../indicator/jewel/purple/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function SidebarStoryIndicator({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Story";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/story/journal">
      <IndicatorPurpleJewel active={active} />
      <IndicatorText active={active}>
        {indicatorLabel}
      </IndicatorText>
    </SidebarIndicator>
  );
}

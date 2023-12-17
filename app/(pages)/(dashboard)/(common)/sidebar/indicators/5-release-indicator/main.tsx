import IndicatorSilverJewel from "../indicator/jewel/silver/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function SidebarStoryIndicator({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Release";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/release/recent">
      <IndicatorSilverJewel active={active} />
      <IndicatorText active={active}>
        {indicatorLabel}
      </IndicatorText>
    </SidebarIndicator>
  );
}

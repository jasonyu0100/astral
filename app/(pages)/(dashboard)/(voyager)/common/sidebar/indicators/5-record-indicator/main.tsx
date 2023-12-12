import SidebarIndicatorSilverJewel from "../indicator/jewel/silver/main";
import SidebarIndicator from "../indicator/main";
import SidebarIndicatorText from "../indicator/text/main";

export default function SidebarStoryIndicator({
  activeIndicator,
}: {
  activeIndicator: string;
}) {
  const indicatorLabel = "Record";
  const active = activeIndicator === indicatorLabel;

  return (
    <SidebarIndicator href="/quest/apollo">
      <SidebarIndicatorSilverJewel active={active} />
      <SidebarIndicatorText active={active}>
        {indicatorLabel}
      </SidebarIndicatorText>
    </SidebarIndicator>
  );
}

import SidebarIndicatorPurpleJewel from "../indicator/jewel/purple/main";
import SidebarIndicator from "../indicator/main";
import SidebarIndicatorText from "../indicator/text/main";

export default function SidebarStoryIndicator({
  activeIndicator,
}: {
  activeIndicator: string;
}) {
  const indicatorLabel = "Story";
  const active = activeIndicator === indicatorLabel;

  return (
    <SidebarIndicator href="/store/visual">
      <SidebarIndicatorPurpleJewel active={active} />
      <SidebarIndicatorText active={active}>
        {indicatorLabel}
      </SidebarIndicatorText>
    </SidebarIndicator>
  );
}

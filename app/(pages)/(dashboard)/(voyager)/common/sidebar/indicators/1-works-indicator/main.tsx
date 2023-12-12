import SidebarIndicatorBlueJewel from "../indicator/jewel/blue/main";
import SidebarIndicator from "../indicator/main";
import SidebarIndicatorText from "../indicator/text/main";

export default function SidebarWorksIndicator({
  activeIndicator,
}: {
  activeIndicator: string;
}) {
  const indicatorLabel = "Works";
  const active = activeIndicator === indicatorLabel;

  return (
    <SidebarIndicator href="/gallery/now">
      <SidebarIndicatorBlueJewel active={active} />
      <SidebarIndicatorText active={active}>
        {indicatorLabel}
      </SidebarIndicatorText>
    </SidebarIndicator>
  );
}

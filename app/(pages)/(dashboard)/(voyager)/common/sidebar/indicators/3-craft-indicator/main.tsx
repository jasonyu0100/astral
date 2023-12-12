import SidebarIndicatorGreenJewel from "../indicator/jewel/green/main";
import SidebarIndicator from "../indicator/main";
import SidebarIndicatorText from "../indicator/text/main";

export default function SidebarCraftIndicator({
  activeIndicator,
}: {
  activeIndicator: string;
}) {
  const indicatorLabel = "Craft";
  const active = activeIndicator === indicatorLabel;

  return (
    <SidebarIndicator href="/craft/speech">
      <SidebarIndicatorGreenJewel active={active}/>
      <SidebarIndicatorText active={active}>{indicatorLabel}</SidebarIndicatorText>
    </SidebarIndicator>
  );
}


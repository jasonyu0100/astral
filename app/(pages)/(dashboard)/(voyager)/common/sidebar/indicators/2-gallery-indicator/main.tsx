import SidebarIndicatorOrangeJewel from "../indicator/jewel/orange/main";
import SidebarIndicator from "../indicator/main";
import SidebarIndicatorText from "../indicator/text/main";

export default function SidebarGalleryIndicator({
  activeIndicator,
}: {
  activeIndicator: string;
}) {
  const indicatorLabel = "Gallery";
  const active = activeIndicator === indicatorLabel;

  return (
    <SidebarIndicator href="/pillars/inspire">
      <SidebarIndicatorOrangeJewel active={active}/>
      <SidebarIndicatorText active={active}>{indicatorLabel}</SidebarIndicatorText>
    </SidebarIndicator>
  );
}

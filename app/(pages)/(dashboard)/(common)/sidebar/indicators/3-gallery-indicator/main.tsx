import IndicatorGreenJewel from "../indicator/jewel/green/main";
import SidebarIndicator from "../indicator/main";
import IndicatorText from "../indicator/text/main";

export default function SidebarGalleryIndicator({
  indicator,
} : {
  indicator?: string;
}) {
  const indicatorLabel = "Gallery";
  const active = indicator === indicatorLabel;

  return (
    <SidebarIndicator href="/gallery/inspire">
      <IndicatorGreenJewel active={active}/>
      <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
    </SidebarIndicator>
  );
}

import { SeaMain } from "./sea-epic/main";
import { SeaSidebar } from "./sea-epic/sidebar/main";
import { SeaPoint } from "./sea-epic/sidebar/point/main";
import { SeaStory } from "./sea-epic/story/main";
import { SeaWrapper } from "./sea-epic/wrapper/main";

export function SeaView() {
  return (
    <SeaWrapper>
      <SeaMain>
        <SeaStory />
      </SeaMain>
      <SeaSidebar>
        <div
          className="flex flex-col w-full overflow-auto"
          style={{ height: "100%" }}
        >
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
          <SeaPoint>Test</SeaPoint>
        </div>
      </SeaSidebar>
    </SeaWrapper>
  );
}

import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultSpeedDial from "./default-speed-dial";
import TextSpeedDial from "./text-speed-dial";

export default function SpeedDialPage() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Speed Dial">
        <DefaultSpeedDial/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Text Speed Dial">
        <TextSpeedDial/>
      </ShowcaseWindowComponent>
    </div>
  );
}

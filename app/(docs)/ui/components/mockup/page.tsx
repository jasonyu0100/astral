import ShowcaseComponent from "@ui/showcase";
import DefaultMockup from "./default-mockup";
import IPhone12Mockup from "./iphone-12-mockup";
import GooglePixelMockup from "./google-pixel-mockup";
import TabletMockup from "./tablet-mockup";
import LaptopMockup from "./laptop-mockup";
import DesktopMockup from "./desktop-mockup";
import SmartWatchMockup from "./smart-watch-mockup";

export default function MockupPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Mockup">
        <DefaultMockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="iPhone 12 Mockup">
        <IPhone12Mockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Google Pixel Mockup">
        <GooglePixelMockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Tablet Mockup">
        <TabletMockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Laptop Mockup">
        <LaptopMockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Desktop Mockup">
        <DesktopMockup/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Smart Watch Mockup">
        <SmartWatchMockup/>
      </ShowcaseComponent>
    </div>
  );
}

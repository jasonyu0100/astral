import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultFooter from "./default-footer";
import StickyFooter from "./sticky-footer";
import SiteMap from "./site-map-footer";
import SocialFooter from "./social-media-footer";
import LogoFooter from "./logo-footer";

export default function FooterPage() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Footer">
        <DefaultFooter/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Logo Footer">
        <LogoFooter/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Social Footer">
        <SocialFooter/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Site Map Footer">
        <SiteMap/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Sticky Footer">
        <StickyFooter/>
      </ShowcaseWindowComponent>
    </div>
  );
}

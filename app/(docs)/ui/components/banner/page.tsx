import { ShowcaseWindowComponent } from "@ui/showcase";
import BottomBanner from "./bottom-banner";
import DefaultBanner from "./default-banner";
import InformationalBanner from "./informational-banner";
import MarketingCtaBanner from "./marketing-cta-banner";
import NewsLetterBanner from "./newsletter-signup-banner";

export default function BannerPage() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Banner">
        <DefaultBanner/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Bottom Banner">
        <BottomBanner/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Marketing CTA Banner">
        <MarketingCtaBanner/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Newsletter Banner">
        <NewsLetterBanner/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Informational Banner">
        <InformationalBanner/>
      </ShowcaseWindowComponent>
    </div>
  )

}

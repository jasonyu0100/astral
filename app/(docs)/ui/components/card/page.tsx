import ShowcaseComponent from "@ui/showcase";
import DefaultCard from "./default-card";
import ButtonCard from "./button-card";
import LinkCard from "./link-card";
import ImageCard from "./image-card";
import HorizontalCard from "./horizontal-card";
import UserProfileCard from "./user-profile-card";
import FormCard from "./form-card";
import ECommerceCard from "./e-commerce-card";
import CtaCard from "./cta-card";
import NavCard from "./nav-card";
import FullWidthNavCard from "./full-width-nav-card";
import ListCard from "./list-card";
import PricingCard from "./pricing-card";
import TestimonialCard from "./testimonial-card";
import CryptoCard from "./crypto-card";

export default function CardPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Card">
        <DefaultCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Button Card">
        <ButtonCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Link Card">
        <LinkCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Image Card">
        <ImageCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Horizontal Card">
        <HorizontalCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="User Profile Card">
        <UserProfileCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Form Card">
        <FormCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="E-commerce Card">
        <ECommerceCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Call to Action Card">
        <CtaCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Nav Card">
        <NavCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Full Width Nav Card">
        <FullWidthNavCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="List Card">
        <ListCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Pricing Card">
        <PricingCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Testimonial Card">
        <TestimonialCard/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Crypto Card">
        <CryptoCard/>
      </ShowcaseComponent>
    </div>
  );
}

import ShowcaseComponent from "@ui/showcase";
import DefaultJumbotron from "./default-jumbotron";
import BackgroundJumbotron from "./background-jumbotron";
import AuthenticationJumbotron from "./authentication-jumbotron";
import FeaturedVideoJumbotron from "./featured-video-jumbotron";
import GradientJumbotron from "./gradient-jumbotron";
import CardJumbotron from "./card-jumbotron";

export default function JumbotronPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Jumbotron">
        <DefaultJumbotron/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Background Jumbotron">
        <BackgroundJumbotron/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Authentication Jumbotron">
        <AuthenticationJumbotron/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Featured Video Jumbotron">
        <FeaturedVideoJumbotron/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Gradient Jumbotron">
        <GradientJumbotron/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Card Jumbotron">
        <CardJumbotron/>
      </ShowcaseComponent>
    </div>
  );
}

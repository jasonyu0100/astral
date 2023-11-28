import ShowcaseComponent from "@ui/showcase";
import DefaultBottomNavigation from "./default-bottom-navigation";
import BorderBottomNavigation from "./border-bottom-navigation";
import ApplicationBarBottomNavigation from "./application-bar-bottom-navigation";
import PaginationBottomNavigation from "./pagination-bottom-navigation";
import ButtonGroupBottomNavigation from "./button-group-bottom-bar";
import CardBottomBarNavigation from "./card-bottom-bar";
import OnlineMeetingBottomNavigation from "./online-meeting-bottom-navigation";
import VideoPlayerBottomBarNavigation from "./video-player-bottom-bar";

export default function BottomNavigationPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Bottom Navigation">
        <DefaultBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Border Bottom Navigation">
        <BorderBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Application Bar Bottom Navigation">
        <ApplicationBarBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Pagination Bottom Navigation">
        <PaginationBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Button Group Bottom Navigation">
        <ButtonGroupBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Card Bottom Bar Navigation">
        <CardBottomBarNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Online Meeting Bottom Navigation">
        <OnlineMeetingBottomNavigation/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Video Player Bar Bottom Navigation">
        <VideoPlayerBottomBarNavigation/>
      </ShowcaseComponent>
    </div>
  );
}

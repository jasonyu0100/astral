import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultDrawer from "./default-drawer";
import ContactFormDrawer from "./contact-form-drawer";
import FormDrawer from "./form-drawer";
import NavigationDrawer from "./navigation-drawer";
import LeftDrawer from "./left-drawer";
import RightDrawer from "./right-drawer";
import TopDrawer from "./top-drawer";
import BottomDrawer from "./bottom-drawer";

export default function DrawerPage() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Drawer">
        <DefaultDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Contact Form Drawer">
        <ContactFormDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Form Drawer">
        <FormDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Navigation Drawer">
        <NavigationDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Left Drawer">
        <LeftDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Right Drawer">
        <RightDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Top Drawer">
        <TopDrawer/>
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Bottom Drawer">
        <BottomDrawer/>
      </ShowcaseWindowComponent>
    </div>
  );
}

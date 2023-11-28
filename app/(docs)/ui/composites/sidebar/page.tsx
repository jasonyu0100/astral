import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultSidebar from "./default-sidebar";
import NavbarSidebar from "./navbar-sidebar";
import CtaSidebar from "./cta-sidebar";

export default function SidebarPage() {
  return (
    <div>
      <ShowcaseWindowComponent title="Default Sidebar">
        <DefaultSidebar />
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Cta Sidebar">
        <CtaSidebar />
      </ShowcaseWindowComponent>
      <ShowcaseWindowComponent title="Navbar Sidebar">
        <NavbarSidebar />
      </ShowcaseWindowComponent>
    </div>
  );
}

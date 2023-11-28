import { ShowcaseWindowComponent } from "@ui/showcase";
import DefaultNavbar from "./default-navbar";
import CtaNavbar from "./cta-navbar";
import StickyNavbar from "./sticky-navbar";

export default function NavbarPage() {
    return <div>
        <ShowcaseWindowComponent title="Default Navbar">
            <DefaultNavbar/>
        </ShowcaseWindowComponent>
        <ShowcaseWindowComponent title="Sticky Navbar">
            <StickyNavbar/>
        </ShowcaseWindowComponent>
        <ShowcaseWindowComponent title="Cta Navbar">
            <CtaNavbar/>
        </ShowcaseWindowComponent>
    </div>
}
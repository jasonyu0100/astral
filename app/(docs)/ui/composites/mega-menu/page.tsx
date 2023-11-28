import ShowcaseComponent from "@ui/showcase";
import DefaultMegaMenu from "./default-mega-menu";
import FullWidthMegaMenu from "./full-width-mega-menu";
import IconMegaMenu from "./icon-mega-menu";

export default function MegaMenu() {
  return (
    <div>
      <ShowcaseComponent title="Default Mega Menu">
        <DefaultMegaMenu />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Mega Menu">
        <IconMegaMenu />
      </ShowcaseComponent>
      <ShowcaseComponent title="Full Width Mega Menu">
        <FullWidthMegaMenu />
      </ShowcaseComponent>
    </div>
  );
}

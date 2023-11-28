import ShowcaseComponent from "@ui/showcase";
import DefaultBreadcrumb from "./default-breadcrumb";
import DropDownBreadcrumb from "./drop-down-breadcrumb";
import HeaderBreadcrumb from "./header-breadcrumb";
import SolidBreadcrumb from "./solid-breadcrumb";

export default function BreadcrumbPage() {
  return (
    <div>
      <ShowcaseComponent title="Default Breadcrumb">
        <DefaultBreadcrumb/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Solid Breadcrumb">
        <SolidBreadcrumb/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Header Breadcrumb">
        <HeaderBreadcrumb/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Drop Down Breadcrumb">
        <DropDownBreadcrumb/>
      </ShowcaseComponent>
    </div>
  );
}

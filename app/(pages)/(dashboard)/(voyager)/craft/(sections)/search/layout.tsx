import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function CraftSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Search"} />
      <VoyagerContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </VoyagerContent>
    </>
  );
}

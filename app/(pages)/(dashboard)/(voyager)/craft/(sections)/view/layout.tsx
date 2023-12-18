import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function CraftViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"View"} />
      <VoyagerContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </VoyagerContent>
    </>
  );
}

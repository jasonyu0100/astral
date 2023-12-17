import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";

export default function CraftAddLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Add"} />
      <DashboardBodyContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </DashboardBodyContent>
    </>
  );
}

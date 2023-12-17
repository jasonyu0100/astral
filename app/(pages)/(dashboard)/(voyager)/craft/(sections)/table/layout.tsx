import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";

export default function CraftTableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Table"} />
      <DashboardBodyContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </DashboardBodyContent>
    </>
  );
}

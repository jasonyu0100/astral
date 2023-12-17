import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";

export default function CraftStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Store"} />
      <DashboardBodyContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </DashboardBodyContent>
    </>
  );
}

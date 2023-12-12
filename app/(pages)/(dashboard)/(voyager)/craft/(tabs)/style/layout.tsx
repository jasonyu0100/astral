import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/common/tabs/3-craft-tabs/main";

export default function CraftStyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Style"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/common/voyager-tabs/craft-tabs/main";

export default function CraftWordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Speech"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(common)/dashboard/tabs/voyager-tabs/craft-tabs/main";

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

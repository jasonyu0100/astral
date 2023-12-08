import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/dashboard/container/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/dashboard/background/main";
import { DashboardContent } from "@/(pages)/(dashboard)/(common)/dashboard/content/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/dashboard/sidebar";
import GalleryTabs from "../../../../(common)/dashboard/tabs/voyager-tabs/gallery-tabs/main";

export default function GalleryNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab={"Now"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

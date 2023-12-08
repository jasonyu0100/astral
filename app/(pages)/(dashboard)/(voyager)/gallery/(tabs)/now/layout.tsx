import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/sidebar";
import GalleryTabs from "../../../common/voyager-tabs/gallery-tabs/main";

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

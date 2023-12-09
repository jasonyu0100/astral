import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import GalleryTabs from "../../../common/tabs/gallery-tabs/main";

export default function GalleryAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab={"All"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

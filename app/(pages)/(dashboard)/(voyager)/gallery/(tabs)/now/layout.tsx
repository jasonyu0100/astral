import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import GalleryTabs from "../../../common/tabs/gallery-tabs/main";

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

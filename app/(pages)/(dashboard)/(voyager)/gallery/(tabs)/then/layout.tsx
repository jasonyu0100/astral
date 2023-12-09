import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import GalleryTabs from "../../../common/tabs/gallery-tabs/main";

export default function GalleryThenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab={"Then"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

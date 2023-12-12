import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import GalleryTabs from "../../../common/tabs/1-gallery-tabs/main";

export default function GalleryNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab={"Now"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

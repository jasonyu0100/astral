import GalleryTabs from "../../../common/tabs/1-gallery-tabs/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";

export default function GalleryAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab={"All"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

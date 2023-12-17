import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import GalleryTabs from "../../tabs/main";

export default function ArtLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Lead" />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

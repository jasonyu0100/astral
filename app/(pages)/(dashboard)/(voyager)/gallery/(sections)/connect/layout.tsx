import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import GalleryTabs from "../../tabs/main";

export default function ArtConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Connect" />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

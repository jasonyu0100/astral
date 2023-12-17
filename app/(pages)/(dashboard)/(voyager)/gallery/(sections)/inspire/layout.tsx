import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import GalleryTabs from "../../tabs/main";

export default function GalleryInspireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Inspire" />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

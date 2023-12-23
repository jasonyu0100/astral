import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import GalleryTabs from "../../tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Edit" />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

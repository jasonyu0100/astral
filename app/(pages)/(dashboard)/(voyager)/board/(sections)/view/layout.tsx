import GalleryTabs from "../../tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="View" />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}

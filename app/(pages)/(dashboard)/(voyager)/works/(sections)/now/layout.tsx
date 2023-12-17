import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import WorksTabs from "../../tabs/main";

export default function WorksNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"Now"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

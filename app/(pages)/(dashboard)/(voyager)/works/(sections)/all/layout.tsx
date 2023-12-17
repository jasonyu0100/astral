import WorksTabs from "../../tabs/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";

export default function WorksAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"All"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

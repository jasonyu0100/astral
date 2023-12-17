import WorksTabs from "../../tabs/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";

export default function WorksThenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"Then"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}

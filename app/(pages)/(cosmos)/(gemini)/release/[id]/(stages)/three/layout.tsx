import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(cosmos)/(common)/controller/body/main";
import { ReleaseTabStage, ReleaseTabs } from "../../tabs/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ReleaseTabs tab={ReleaseTabStage.Three} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}

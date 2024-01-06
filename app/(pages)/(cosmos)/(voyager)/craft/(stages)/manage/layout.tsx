import {
  CraftTabStage,
  CraftTabs,
} from "@/(pages)/(cosmos)/(voyager)/craft/tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { DriveWrapper } from "./drive-epic/wrapper/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Manage} />
      <DashboardContent>
          {children}
      </DashboardContent>
    </>
  );
}

import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={"Manage"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

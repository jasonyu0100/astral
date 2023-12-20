import RecordTabs from "@/(pages)/(dashboard)/(voyager)/record/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Release"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

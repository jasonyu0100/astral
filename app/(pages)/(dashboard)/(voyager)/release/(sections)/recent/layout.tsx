import RecordTabs from "@/(pages)/(dashboard)/(voyager)/release/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ReleaseRecentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Recent"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

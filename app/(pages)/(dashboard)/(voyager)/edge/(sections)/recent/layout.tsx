import RecordTabs from "@/(pages)/(dashboard)/(voyager)/edge/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ReleaseRecentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Label"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

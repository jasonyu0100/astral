import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/release/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ReleaseAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"All"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

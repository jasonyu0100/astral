import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/edge/tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ReleaseAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Monetise"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

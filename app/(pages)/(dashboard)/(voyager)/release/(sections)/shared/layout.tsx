import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/release/tabs/main";

export default function ReleaseSharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Shared"} />
      <ApolloContent>{children}</ApolloContent>
    </>
  );
}

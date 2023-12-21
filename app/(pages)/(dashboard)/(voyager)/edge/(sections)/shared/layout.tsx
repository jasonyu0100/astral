import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/edge/tabs/main";

export default function ReleaseSharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecordTabs tab={"Cover"} />
      <ApolloContent>{children}</ApolloContent>
    </>
  );
}

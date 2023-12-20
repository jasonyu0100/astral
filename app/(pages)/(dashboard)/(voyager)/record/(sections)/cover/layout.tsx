import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import RecordTabs from "@/(pages)/(dashboard)/(voyager)/record/tabs/main";

export default function Layout({
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

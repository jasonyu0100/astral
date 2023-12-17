import { VoyagerContent } from "../../../(common)/content/main";
import WorksTabs from "../../tabs/main";
import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";

export default function WorksThenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"Then"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

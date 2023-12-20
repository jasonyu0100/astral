import { VoyagerContent } from "../../../(common)/content/main";
import WorksTabs from "../../tabs/main";

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

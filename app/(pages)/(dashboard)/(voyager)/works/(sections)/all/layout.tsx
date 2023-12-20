import { VoyagerContent } from "../../../(common)/content/main";
import WorksTabs from "../../tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"All"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

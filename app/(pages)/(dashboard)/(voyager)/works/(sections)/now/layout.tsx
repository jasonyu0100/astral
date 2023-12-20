import WorksTabs from "../../tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={"Now"} />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

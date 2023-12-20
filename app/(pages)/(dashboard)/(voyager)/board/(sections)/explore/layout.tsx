import GalleryTabs from "../../tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Explore" />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

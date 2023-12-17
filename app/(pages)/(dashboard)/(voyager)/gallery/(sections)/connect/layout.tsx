import GalleryTabs from "../../tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ArtConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Connect" />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

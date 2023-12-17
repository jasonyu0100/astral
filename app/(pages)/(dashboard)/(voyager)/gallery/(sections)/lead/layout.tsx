import GalleryTabs from "../../tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function ArtLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Lead" />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

import GalleryTabs from "../../tabs/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function GalleryInspireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GalleryTabs tab="Inspire" />
      <VoyagerContent>{children}</VoyagerContent>
    </>
  );
}

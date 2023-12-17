import { ApolloContent } from "@/(pages)/(dashboard)/(apollo)/(common)/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";
import { VoyagerContent } from "../../../(common)/content/main";

export default function CraftStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Store"} />
      <VoyagerContent>
        <BreadCrumbWrapper>
          {children}
          <BreadCrumb>/craft/brand/icon</BreadCrumb>
        </BreadCrumbWrapper>
      </VoyagerContent>
    </>
  );
}

import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import {  DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { Sidebar } from "../(voyager)/common/sidebar";

export default function GeminiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        {children}
      </DashboardBackground>
    </DashboardWrapper>
  );
}

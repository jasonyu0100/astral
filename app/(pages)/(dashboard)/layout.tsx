import { Background } from "@/(pages)/(common)/background/main";
import Topbar from "../(common)/topbar/main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background>
      <Topbar />
      {children}
    </Background>
  );
}

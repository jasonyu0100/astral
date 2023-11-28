import { Background } from "@/(pages)/(common)/background/main";
import Navbar from "../(common)/topbar/main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background>
      <Navbar />
      {children}
    </Background>
  );
}

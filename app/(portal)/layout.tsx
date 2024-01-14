import { PortalBackground } from "../(common)/background/portal/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <PortalBackground>{children}</PortalBackground>
  );
}

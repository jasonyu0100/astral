import { PortalBackground } from "./portal-epic/background/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <PortalBackground>{children}</PortalBackground>
  );
}

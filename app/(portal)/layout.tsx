import { PortalBackground } from "./polaroid-epic/background/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <PortalBackground>{children}</PortalBackground>
  );
}

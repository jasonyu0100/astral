import { PortalBackground } from "./(pages)/(common)/background/portal/main";
import { LoginView } from "./(pages)/(portal)/login/view";

export default function Page() {
  return (
    <PortalBackground>
      <LoginView />
    </PortalBackground>
  );
}

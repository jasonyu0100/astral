import { PortalBackground } from "./(common)/background/portal/main";
import { LoginView } from "./(portal)/login/view";

export default function Page() {
  return (
    <PortalBackground>
      <LoginView />
    </PortalBackground>
  );
}

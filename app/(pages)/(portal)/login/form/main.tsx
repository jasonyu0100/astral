import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";
import { useState } from "react";
import { PortalFormAction } from "../../portal-epic/container/form/action-container/action/main";
import { PortalFormInput } from "../../portal-epic/container/form/body/input/main";
import { PortalFormBody } from "../../portal-epic/container/form/body/main";
import { PortalForm } from "../../portal-epic/container/form/main";
import { PortalFormOrDivider } from "../../portal-epic/container/or/main";
import { PortalFormGoogleAction } from "../../portal-epic/container/form/action-container/google-action/main";
import { PortalCosmosTextHeader } from "../../portal-epic/container/text-header/main";
import { PortalFormAltAction } from "../../portal-epic/container/form/action-container/alt-action/main";
import { PortalFormAltActionLink } from "../../portal-epic/container/form/action-container/alt-action/link/main";
import { PortalFormActionContainer } from "../../portal-epic/container/form/action-container/main";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@/state/main";
import { portalMap } from "../../map";

export function PortalLoginForm() {
  const [state, actions] = useUser();
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const router = useRouter()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const accessToken = codeResponse.access_token;
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((resp) => {
          const googleId = resp.data.id;
          actions.login(googleId, accessToken);
          window.location.href = worksMap.works.now.link;
        });
    },
    onError: (error) => {
      alert("Login Failed");
      console.log("Login Failed:", error);
    },
  });

  return (
    <PortalForm>
      <PortalCosmosTextHeader />
      <PortalFormGoogleAction onClick={() => login()}>
        Login with Google
      </PortalFormGoogleAction>
      <PortalFormOrDivider />
      <PortalFormBody>
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder="example@email.com"
          type="text"
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction>
          LOGIN
        </PortalFormAction>
        <PortalFormAltAction>
          Don't have an account?{" "}
          <PortalFormAltActionLink href={portalMap.portal.register.link}>
            Register
          </PortalFormAltActionLink>
        </PortalFormAltAction>
      </PortalFormActionContainer>
    </PortalForm>
  );
}

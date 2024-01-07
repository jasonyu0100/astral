import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";
import { useState } from "react";
import { PortalFormAction } from "../../portal-epic/container/form/action-container/action/main";
import { PortalFormInput } from "../../portal-epic/container/form/body/input/main";
import { PortalFormBody } from "../../portal-epic/container/form/body/main";
import { PortalForm } from "../../portal-epic/container/form/main";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { portalMap } from "../../map";
import { PortalFormOrDivider } from "../../portal-epic/container/or/main";
import { PortalFormGoogleAction } from "../../portal-epic/container/form/action-container/google-action/main";
import { PortalCosmosTextHeader } from "../../portal-epic/container/text-header/main";
import { PortalFormAltAction } from "../../portal-epic/container/form/action-container/alt-action/main";
import { PortalFormAltActionLink } from "../../portal-epic/container/form/action-container/alt-action/link/main";
import { PortalFormActionContainer } from "../../portal-epic/container/form/action-container/main";

export function PortalLoginForm() {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
  };

  return (
    <PortalForm>
      <PortalCosmosTextHeader />
      <PortalFormGoogleAction onClick={() => login()} >Login with Google</PortalFormGoogleAction>
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
        <PortalFormAction href={worksMap.works.now.link}>
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

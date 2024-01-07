import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";
import { useState } from "react";
import { PortalFormAction } from "../../portal-epic/container/form/action-container/action/main";
import { PortalFormInput } from "../../portal-epic/container/form/body/input/main";
import { PortalFormBody } from "../../portal-epic/container/form/body/main";
import { PortalFormSelect } from "../../portal-epic/container/form/body/select/main";
import { PortalForm } from "../../portal-epic/container/form/main";
import { portalModel } from "../../model/main";
import { PortalCosmosTextHeader } from "../../portal-epic/container/text-header/main";
import { PortalFormGoogleAction } from "../../portal-epic/container/form/action-container/google-action/main";
import { PortalFormOrDivider } from "../../portal-epic/container/or/main";
import { portalMap } from "../../map";
import { PortalFormActionContainer } from "../../portal-epic/container/form/action-container/main";
import { PortalFormAltActionLink } from "../../portal-epic/container/form/action-container/alt-action/link/main";
import { PortalFormAltAction } from "../../portal-epic/container/form/action-container/alt-action/main";

export function PortalRegisterForm() {
  const categories = portalModel.categories.example;
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [rePassword, changeRePassword] = useState("");

  return (
    <PortalForm>
      <PortalFormGoogleAction>Register with Google</PortalFormGoogleAction>
      <PortalFormOrDivider />
      <PortalFormBody>
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder="Jason"
          type="text"
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder="Yu"
          type="text"
        />
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
        <PortalFormInput
          type="password"
          value={rePassword}
          onChange={(e) => changeRePassword(e.target.value)}
          placeholder="Re-enter password"
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction href={worksMap.works.now.link}>
          REGISTER
        </PortalFormAction>
        <PortalFormAltAction>
          Already have an account?{" "}
          <PortalFormAltActionLink href={portalMap.portal.login.link}>
            Login
          </PortalFormAltActionLink>
        </PortalFormAltAction>
      </PortalFormActionContainer>
    </PortalForm>
  );
}

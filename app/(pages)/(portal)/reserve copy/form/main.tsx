import { worksMap } from "@/(pages)/(cosmos)/(voyager)/works/map";
import { useState } from "react";
import { PortalFormAction } from "../../portal-epic/container/form/action-container/action/main";
import { PortalFormInput } from "../../portal-epic/container/form/body/input/main";
import { PortalFormBody } from "../../portal-epic/container/form/body/main";
import { PortalFormSelect } from "../../portal-epic/container/form/body/select/main";
import { PortalForm } from "../../portal-epic/container/form/main";
import { portalModel } from "../../model/main";

export function PortalReserveForm() {
  const categories = portalModel.categories.example
  const [tag, changeTag] = useState("");
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [role, changeRole] = useState("");

  return (
    <PortalForm>
      <PortalFormBody>
        <PortalFormInput
          onChange={(e) => changeTag(e.target.value)}
          value={tag}
          placeholder="J22"
          type="text"
        />
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
        <PortalFormSelect
          value={role}
          onChange={(e) => {
            changeRole(e.target.value);
          }}
        >
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </PortalFormSelect>
      </PortalFormBody>
      <PortalFormAction href={worksMap.works.now.link}>
        RESERVE
      </PortalFormAction>
    </PortalForm>
  );
}

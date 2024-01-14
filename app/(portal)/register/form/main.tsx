import { useState } from "react";
import { portalMap } from "../../map";
import { useUser } from "@/state/main";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { spacesMap } from "@/(cosmos)/(voyager)/spaces/map";
import { PortalFormAction } from "@/(portal)/polaroid-epic/container/form/action-container/action/main";
import { PortalFormAltActionLink } from "@/(portal)/polaroid-epic/container/form/action-container/alt-action/link/main";
import { PortalFormAltAction } from "@/(portal)/polaroid-epic/container/form/action-container/alt-action/main";
import { PortalFormGoogleAction } from "@/(portal)/polaroid-epic/container/form/action-container/google-action/main";
import { PortalFormActionContainer } from "@/(portal)/polaroid-epic/container/form/action-container/main";
import { PortalFormInput } from "@/(portal)/polaroid-epic/container/form/body/input/main";
import { PortalFormBody } from "@/(portal)/polaroid-epic/container/form/body/main";
import { PortalForm } from "@/(portal)/polaroid-epic/container/form/main";
import { PortalFormOrDivider } from "@/(portal)/polaroid-epic/container/form/or/main";

export function PortalRegisterForm() {
  const [state, actions] = useUser();
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [rePassword, changeRePassword] = useState("");

  const attemptGoogleRegister = useGoogleLogin({
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
          fetch("/api/portal/register/google", {
            method: "POST",
            body: JSON.stringify({
              fname,
              lname,
              email,
              googleId,
              accessToken,
            }),
          }).then((res) => {
            if (res.status === 200) {
              res.json().then((user) => {
                actions.login(user.googleId);
                window.location.href = spacesMap.spaces.now.link;
              });
            } else {
              alert("Login Failed");
            }
          });
        });
    },
    onError: (error) => {
      alert("Login Failed");
      console.log("Login Failed:", error);
    },
  });

  const attemptRegister = () => {
    fetch("/api/portal/register", {
      method: "POST",
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((user) => {
          actions.login(user.googleId);
          window.location.href = spacesMap.spaces.now.link;
        });
      } else {
        alert("Login Failed");
      }
    });
  };

  return (
    <PortalForm>
      <PortalFormGoogleAction onClick={() => attemptGoogleRegister()}>
        Register with Google
      </PortalFormGoogleAction>
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
        <PortalFormAction onClick={() => attemptRegister()}>
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

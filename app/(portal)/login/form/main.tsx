import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { portalMap } from '../../map';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { PortalFormAltActionLink } from '@/(portal)/(common)/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/(common)/container/form/action-container/alt-action/main';
import { PortalFormGoogleAction } from '@/(portal)/(common)/container/form/action-container/google-action/main';
import { PortalFormActionContainer } from '@/(portal)/(common)/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/(common)/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/(common)/container/form/body/main';
import { PortalForm } from '@/(portal)/(common)/container/form/main';
import { PortalFormOrDivider } from '@/(portal)/(common)/container/form/or/main';
import { PortalTextHeader } from '@/(portal)/(common)/container/form/text-header/main';
import axios from 'axios';
import { emailLoginUser, googleLoginUser } from '@/(logic)/auth/login/main';
import { UserObj } from '@/(server)/(model)/user/main';
import { PortalFormAction } from '@/(portal)/(common)/container/form/action-container/action/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';

export function PortalLoginForm() {
  const userController = useControllerForUserMain('');
  const login = useGlobalUser((state) => state.login);
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const attempGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const accessToken = codeResponse.access_token;
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: 'application/json',
            },
          },
        )
        .then((resp) => {
          const email = resp.data.email;
          const googleId = resp.data.id;
          userController.actions.stateActions
            .loginFromGoogle(email, googleId)
            .then((user) => {
              login(user);
              alert('Login Success');
              window.location.href = studioMap.studio.spaces.link;
            });
        });
    },
    onError: (error) => {
      alert('Login Failed');
      console.log('Login Failed:', error);
    },
  });

  const attemptLogin = () => {
    userController.actions.stateActions
      .loginFromEmail(email, password)
      .then((user) => {
        login(user);
        alert('Login Success');
        window.location.href = studioMap.studio.spaces.link;
      });
  };

  return (
    <PortalForm>
      <PortalTextHeader />
      <div className='p-[1rem]' />
      <PortalFormBody>
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email@studio.com'
          emoji='🎧'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='Password'
          emoji='🔒'
          type='password'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => attemptLogin()}>
          LOGIN
        </PortalFormAction>
        {/* <PortalFormGoogleAction onClick={() => attempGoogleLogin()}>
          Login with Google
        </PortalFormGoogleAction> */}
        <PortalFormAltAction>
          Don{"'"}t have an account?{' '}
          <PortalFormAltActionLink href={portalMap.portal.register.link}>
            Register
          </PortalFormAltActionLink>
        </PortalFormAltAction>
      </PortalFormActionContainer>
    </PortalForm>
  );
}

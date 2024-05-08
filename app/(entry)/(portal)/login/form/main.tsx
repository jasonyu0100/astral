import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { portalMap } from '../../map';
import { studioMap } from '@/(core)/(board)/studio/map';
import { PortalFormAction } from '@/(entry)/(portal)/(polaroid-epic)/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(entry)/(portal)/(polaroid-epic)/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(entry)/(portal)/(polaroid-epic)/container/form/action-container/alt-action/main';
import { PortalFormGoogleAction } from '@/(entry)/(portal)/(polaroid-epic)/container/form/action-container/google-action/main';
import { PortalFormActionContainer } from '@/(entry)/(portal)/(polaroid-epic)/container/form/action-container/main';
import { PortalFormInput } from '@/(entry)/(portal)/(polaroid-epic)/container/form/body/input/main';
import { PortalFormBody } from '@/(entry)/(portal)/(polaroid-epic)/container/form/body/main';
import { PortalForm } from '@/(entry)/(portal)/(polaroid-epic)/container/form/main';
import { PortalFormOrDivider } from '@/(entry)/(portal)/(polaroid-epic)/container/form/or/main';
import { PortalTextHeader } from '@/(entry)/(portal)/(polaroid-epic)/container/form/text-header/main';
import axios from 'axios';
import {
  emailLoginUser,
  googleLoginUser,
} from '@/(logic)/internal/calls/auth/login/main';
import { UserObj } from '@/(types)/model/user/main';

export function PortalLoginForm() {
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
          googleLoginUser(email, googleId).then((res) => {
            if (res.status) {
              const user = res.data as UserObj;
              login(user);
              alert('Login Success');
              window.location.href = studioMap.studio.spaces.link;
            } else {
              alert(res.error);
            }
          });
        });
    },
    onError: (error) => {
      alert('Login Failed');
      console.log('Login Failed:', error);
    },
  });

  const attemptLogin = () => {
    emailLoginUser(email, password).then((res) => {
      if (res.status) {
        const user = res.data as UserObj;
        login(user);
        alert('Login Success');
        window.location.href = studioMap.studio.spaces.link;
      } else {
        alert(res.error);
      }
    });
  };

  return (
    <PortalForm>
      <PortalTextHeader />
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
        <PortalFormGoogleAction onClick={() => attempGoogleLogin()}>
          Login with Google
        </PortalFormGoogleAction>
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

import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useGlobalUser } from '@/(store)/user/main';
import { portalMap } from '../../map';
import { studioMap } from '@/(cosmos)/(voyager)/studio/map';
import { PortalFormAction } from '@/(portal)/(polaroid-epic)/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/(polaroid-epic)/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/(polaroid-epic)/container/form/action-container/alt-action/main';
import { PortalFormGoogleAction } from '@/(portal)/(polaroid-epic)/container/form/action-container/google-action/main';
import { PortalFormActionContainer } from '@/(portal)/(polaroid-epic)/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/(polaroid-epic)/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/(polaroid-epic)/container/form/body/main';
import { PortalForm } from '@/(portal)/(polaroid-epic)/container/form/main';
import { PortalFormOrDivider } from '@/(portal)/(polaroid-epic)/container/form/or/main';
import { PortalCosmosTextHeader } from '@/(portal)/(polaroid-epic)/container/form/text-header/main';
import axios from 'axios';
import { emailLoginUser, googleLoginUser } from '@/(portal)/(auth)/login/main';
import { UserObj } from '@/(ouros)/(model)/user/main';

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
              window.location.href = studioMap.studio.now.link;
            } else {
              alert('Login Failed');
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
        window.location.href = studioMap.studio.now.link;
      } else {
        alert('Login Failed');
      }
    });
  };

  return (
    <PortalForm>
      <PortalCosmosTextHeader />
      <PortalFormGoogleAction onClick={() => attempGoogleLogin()}>
        Login with Google
      </PortalFormGoogleAction>
      <PortalFormOrDivider />
      <PortalFormBody>
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='example@email.com'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => attemptLogin()}>
          LOGIN
        </PortalFormAction>
        <PortalFormAltAction>
          Don't have an account?{' '}
          <PortalFormAltActionLink href={portalMap.portal.register.link}>
            Register
          </PortalFormAltActionLink>
        </PortalFormAltAction>
      </PortalFormActionContainer>
    </PortalForm>
  );
}

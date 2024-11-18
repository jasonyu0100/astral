import { homeMap } from '@/(core)/(dashboard)/home/map';
import { PortalFormAction } from '@/(portal)/common/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/common/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/common/container/form/action-container/alt-action/main';
import { PortalFormActionContainer } from '@/(portal)/common/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/common/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/common/container/form/body/main';
import { PortalForm } from '@/(portal)/common/container/form/main';
import { PortalTextHeader } from '@/(portal)/common/container/form/text-header/main';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  CredentialResponse,
  GoogleLogin,
  useGoogleLogin,
} from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { portalMap } from '../../map';

export function PortalLoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const userController = useControllerForUserMain('');
  const login = useGlobalUser((state) => state.login);
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
    },
    flow: 'auth-code',
  });

  const attemptLoginWithDefault = () => {
    userController.actions.stateActions
      .loginFromEmail(email, password)
      .then((user) => {
        login(user);
        alert('Login Success');
        if (redirect) {
          window.location.href = redirect;
        } else {
          window.location.href = homeMap.home.projects.link;
        }
      });
  };

  const attemptLoginWithGoogle = (googleResponse: CredentialResponse) => {
    const clientId = googleResponse.clientId || '';
    const decodedToken = jwtDecode(googleResponse.credential || '');
    const { email } = decodedToken;
    userController.actions.stateActions
      .loginFromGoogle(email, clientId)
      .then((user) => {
        login(user);
        alert('Login Success');
        if (redirect) {
          window.location.href = redirect;
        } else {
          window.location.href = homeMap.home.projects.link;
        }
      });
  };

  return (
    <PortalForm>
      <PortalTextHeader />
      <PortalFormBody>
        <GoogleLogin
          size='large'
          shape='rectangular'
          theme='filled_blue'
          text='continue_with'
          width={400}
          onError={() => alert('Google Sign in Failed')}
          onSuccess={(response) => {
            attemptLoginWithGoogle(response);
          }}
        />
        <br />
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email'
          emoji='🎧'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='password'
          emoji='🔒'
          type='password'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => attemptLoginWithDefault()}>
          LOGIN
        </PortalFormAction>
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

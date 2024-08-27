import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { PortalFormAction } from '@/(portal)/common/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/common/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/common/container/form/action-container/alt-action/main';
import { PortalFormActionContainer } from '@/(portal)/common/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/common/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/common/container/form/body/main';
import { PortalForm } from '@/(portal)/common/container/form/main';
import { PortalTextHeader } from '@/(portal)/common/container/form/text-header/main';
import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useState } from 'react';
import { portalMap } from '../../map';

export function PortalLoginForm() {
  const userController = useControllerForUserMain('');
  const login = useGlobalUser((state) => state.login);
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const attemptLogin = () => {
    userController.actions.stateActions
      .loginFromEmail(email, password)
      .then((user) => {
        login(user);
        alert('Login Success');
        window.location.href = studioMap.studio.personal.link;
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

import { useContext, useState } from 'react';
import { portalMap } from '../../map';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { useGoogleLogin } from '@react-oauth/google';
import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { PortalFormAction } from '@/(portal)/(common)/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/(common)/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/(common)/container/form/action-container/alt-action/main';
import { PortalFormGoogleAction } from '@/(portal)/(common)/container/form/action-container/google-action/main';
import { PortalFormActionContainer } from '@/(portal)/(common)/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/(common)/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/(common)/container/form/body/main';
import { PortalForm } from '@/(portal)/(common)/container/form/main';
import { PortalFormOrDivider } from '@/(portal)/(common)/container/form/or/main';
import axios from 'axios';
import { PolaroidContext } from '@/(portal)/(common)/handler/polaroid/main';
import {
  emailRegisterUser,
  googleRegisterUser,
} from '@/(logic)/internal/calls/auth/register/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(model)/elements/file/main';
import { UserObj } from '@/(model)/user/main';
import { PortalTextHeader } from '../../(common)/container/form/text-header/main';

export function PortalRegisterForm() {
  const { variant } = useContext(PolaroidContext);
  const register = useGlobalUser((state) => state.register);
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [rePassword, changeRePassword] = useState('');

  const attemptGoogleRegister = useGoogleLogin({
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
          const googleId = resp.data.id;
          const fname = resp.data.given_name;
          const lname = resp.data.family_name;
          const profilePicture: FileElem = {
            id: crypto.randomUUID(),
            src: resp.data.picture,
            fileType: 'image/*',
            title: 'Profile Picture',
            size: 0,
            variant: FileElemVariant.IMAGE,
          };
          const email = resp.data.email;
          googleRegisterUser(
            fname,
            lname,
            email,
            googleId,
            profilePicture,
          ).then((res) => {
            if (res.status === true) {
              const user = res.data as UserObj;
              register(user);
              alert('Register Success');
              window.location.href = studioMap.studio.spaces.link;
            } else {
              alert(res.error);
            }
          });
        });
    },
    onError: (error) => {
      alert('Register Failed');
      console.log('Register Failed:', error);
    },
  });

  const attemptRegister = () => {
    emailRegisterUser(fname, lname, email, password).then((res) => {
      if (res.status) {
        const user = res.data as UserObj;
        register(user);
        alert('Register Success');
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
        <div className='flex flex-row'>
          <PortalFormInput
            value={fname}
            onChange={(e) => changeFname(e.target.value)}
            placeholder={'first name'}
            emoji='🎤'
            type='text'
          />
          <div className='w-[40px]' />
          <PortalFormInput
            value={lname}
            onChange={(e) => changeLname(e.target.value)}
            placeholder={'last name'}
            emoji='🎸'
            type='text'
          />
        </div>
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='Email'
          emoji='✉️'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='Password'
          type='password'
          emoji='🔒'
        />
        <PortalFormInput
          emoji='🔐'
          type='password'
          value={rePassword}
          onChange={(e) => changeRePassword(e.target.value)}
          placeholder='Re-enter password'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => attemptRegister()}>
          REGISTER
        </PortalFormAction>
        <PortalFormGoogleAction onClick={() => attemptGoogleRegister()}>
          Register with Google
        </PortalFormGoogleAction>
        <PortalFormAltAction>
          Already have an account?{' '}
          <PortalFormAltActionLink href={portalMap.portal.login.link}>
            Login
          </PortalFormAltActionLink>
        </PortalFormAltAction>
      </PortalFormActionContainer>
    </PortalForm>
  );
}

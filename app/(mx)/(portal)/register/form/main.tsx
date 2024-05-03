import { useContext, useState } from 'react';
import { portalMap } from '../../map';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';
import { useGoogleLogin } from '@react-oauth/google';
import { studioMap } from '@/(cx)/(center)/studio/map';
import { PortalFormAction } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/alt-action/main';
import { PortalFormGoogleAction } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/google-action/main';
import { PortalFormActionContainer } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/main';
import { PortalFormInput } from '@/(mx)/(portal)/(polaroid-epic)/container/form/body/input/main';
import { PortalFormBody } from '@/(mx)/(portal)/(polaroid-epic)/container/form/body/main';
import { PortalForm } from '@/(mx)/(portal)/(polaroid-epic)/container/form/main';
import { PortalFormOrDivider } from '@/(mx)/(portal)/(polaroid-epic)/container/form/or/main';
import axios from 'axios';
import { PolaroidContext } from '@/(mx)/(portal)/(polaroid-epic)/handler/polaroid/main';
import { emailRegisterUser, googleRegisterUser } from '@/(lgx)/internal/calls/auth/register/main';
import { FileObj, FileVariant } from '@/(lgx)/internal/model/resource/file/main';
import { UserObj } from '@/(lgx)/internal/model/user/main';

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
          const profilePicture: FileObj = {
            id: crypto.randomUUID(),
            src: resp.data.picture,
            fileType: 'image/*',
            title: 'Profile Picture',
            size: 0,
            variant: FileVariant.IMAGE,
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
      <PortalFormGoogleAction onClick={() => attemptGoogleRegister()}>
        Register with Google
      </PortalFormGoogleAction>
      <PortalFormOrDivider />
      <PortalFormBody>
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder={variant === 'm' ? 'John' : 'Taylor'}
          type='text'
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder={variant === 'm' ? 'Mayer' : 'Swift'}
          type='text'
        />
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <PortalFormInput
          type='password'
          value={rePassword}
          onChange={(e) => changeRePassword(e.target.value)}
          placeholder='Re-enter password'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => alert("Coming soon...")}>
          REGISTER
        </PortalFormAction>
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

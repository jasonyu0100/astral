import { createMap } from '@/(core)/(dashboard)/create/map';
import { PortalFormAction } from '@/(portal)/common/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/common/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/common/container/form/action-container/alt-action/main';
import { PortalFormActionContainer } from '@/(portal)/common/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/common/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/common/container/form/body/main';
import { PortalForm } from '@/(portal)/common/container/form/main';
import { useControllerForGalleryList } from '@/architecture/controller/gallery/list';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { portalMap } from '../../map';

export function PortalRegisterForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const userController = useControllerForUserMain('');
  const galleryListController = useControllerForGalleryList('');
  const register = useGlobalUser((state) => state.register);
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [role, changeRole] = useState('Creator');

  async function attemptRegisterWithDefault() {
    const user = await userController.actions.createActions.registerFromEmail(
      fname,
      lname,
      role,
      email,
      password,
    );
    if (!user) {
      return;
    } else {
      const journal =
        await galleryListController.actions.createActions.createGallery(
          user.id,
          'Uploads',
          'My uploads',
          exampleFileElement,
        );
      const update = await userController.actions.editActions.edit({
        ...user,
        journalId: journal.id,
      });
      register(update);
      alert('Register Success');
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = '/pricing';
      }
    }
  }

  async function attemptRegisterWithGoogle(googleResponse: CredentialResponse) {
    const clientId = googleResponse.clientId;
    const decodedToken = jwtDecode(googleResponse.credential || '');
    const { given_name, family_name, email } = decodedToken;

    const user = await userController.actions.createActions.registerFromGoogle(
      given_name,
      family_name,
      'user', // Default role or adjust as needed
      email,
      clientId || '',
    );

    console.log(user);

    if (!user) {
      return;
    } else {
      const journal =
        await galleryListController.actions.createActions.createGallery(
          user.id,
          'Uploads',
          'My uploads',
          exampleFileElement,
        );
      const update = await userController.actions.editActions.edit({
        ...user,
        journalId: journal.id,
      });
      register(update);
      alert('Register Success');
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = createMap.home.spaces.link;
      }
    }
  }

  return (
    <PortalForm>
      <PortalFormBody>
        <GoogleLogin
          onSuccess={(response) => {
            attemptRegisterWithGoogle(response);
          }}
          onError={() => alert('Google Register Failed')}
          size='large'
          shape='rectangular'
          theme='filled_blue'
          text='signup_with'
          width={400}
        />
        <br />
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder={'first name'}
          emoji='🎤'
          type='text'
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder={'last name'}
          emoji='🎸'
          type='text'
        />
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email'
          emoji='✉️'
          type='text'
        />
        <PortalFormInput
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          placeholder='password'
          type='password'
          emoji='🔒'
        />
      </PortalFormBody>
      <PortalFormActionContainer>
        <PortalFormAction onClick={() => attemptRegisterWithDefault()}>
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

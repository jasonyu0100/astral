import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { PortalFormAction } from '@/(portal)/common/container/form/action-container/action/main';
import { PortalFormAltActionLink } from '@/(portal)/common/container/form/action-container/alt-action/link/main';
import { PortalFormAltAction } from '@/(portal)/common/container/form/action-container/alt-action/main';
import { PortalFormActionContainer } from '@/(portal)/common/container/form/action-container/main';
import { PortalFormInput } from '@/(portal)/common/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/common/container/form/body/main';
import { PortalForm } from '@/(portal)/common/container/form/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForGalleryList } from '@/server/controller/gallery/list';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { useState } from 'react';
import { PortalTextHeader } from '../../common/container/form/text-header/main';
import { portalMap } from '../../map';

export function PortalRegisterForm() {
  const userController = useControllerForUserMain('');
  const galleryListController = useControllerForGalleryList('');
  const register = useGlobalUser((state) => state.register);
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [role, changeRole] = useState('');

  async function attemptRegister() {
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
          'Journal',
          'My journal',
          exampleFileElement,
        );
      const update = await userController.actions.editActions.edit({
        ...user,
        journalId: journal.id,
      });
      register(update);
      alert('Register Success');
      window.location.href = studioMap.studio.personal.link;
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      attemptRegister();
    }
  }

  return (
    <PortalForm>
      <PortalTextHeader />
      <PortalFormBody>
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
          value={role}
          onChange={(e) => changeRole(e.target.value)}
          placeholder='role'
          emoji='🎧'
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
        <PortalFormAction onClick={() => attemptRegister()}>
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

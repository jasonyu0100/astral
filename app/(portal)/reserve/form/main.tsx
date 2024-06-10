import { useContext, useState } from 'react';
import { PortalFormAction } from '@/(portal)/(common)/container/form/action-container/action/main';
import { PortalFormInput } from '@/(portal)/(common)/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/(common)/container/form/body/main';
import { PortalFormSelect } from '@/(portal)/(common)/container/form/body/select/main';
import { PortalForm } from '@/(portal)/(common)/container/form/main';
import { PortalTextHeader } from '@/(portal)/(common)/container/form/text-header/main';
import { portalModel } from '@/(portal)/(common)/model/main';
import { PolaroidContext } from '@/(portal)/(common)/handler/polaroid/main';
import { useControllerForUserReservationMain } from '@/(server)/(controller)/user/reservation/main';

export function PortalReserveForm() {
  const reservationController = useControllerForUserReservationMain('');
  const categories = portalModel.categories.example;
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [role, changeRole] = useState('');

  const attemptReserve = async () => {
    reservationController.actions.createActions.reserve(fname, lname, email, role).then(res => {
      alert('Position reserved.');
      window.location.href = '/';
    })
  };

  return (
    <PortalForm>
      <PortalTextHeader />
      <PortalFormBody>
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder={`first name`}
          emoji='🎤'
          type='text'
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder={`last name`}
          type='text'
          emoji='🎸'
        />
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email@studio.com'
          type='text'
          emoji='🎧'
        />
        <PortalFormSelect
          value={role}
          onChange={(e) => {
            changeRole(e.target.value);
          }}
        >
          {categories.map((category) => (
            <option value={category} key={category}>⭐ {category}</option>
          ))}
        </PortalFormSelect>
      </PortalFormBody>
      <PortalFormAction onClick={() => attemptReserve()}>
        RESERVE
      </PortalFormAction>
    </PortalForm>
  );
}

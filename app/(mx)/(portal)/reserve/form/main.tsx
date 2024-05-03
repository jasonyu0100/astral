import { useContext, useState } from 'react';
import { PortalFormAction } from '@/(mx)/(portal)/(polaroid-epic)/container/form/action-container/action/main';
import { PortalFormInput } from '@/(mx)/(portal)/(polaroid-epic)/container/form/body/input/main';
import { PortalFormBody } from '@/(mx)/(portal)/(polaroid-epic)/container/form/body/main';
import { PortalFormSelect } from '@/(mx)/(portal)/(polaroid-epic)/container/form/body/select/main';
import { PortalForm } from '@/(mx)/(portal)/(polaroid-epic)/container/form/main';
import { PortalVersesTextHeader } from '@/(mx)/(portal)/(polaroid-epic)/container/form/text-header/main';
import { portalModel } from '@/(mx)/(portal)/(polaroid-epic)/model/main';
import { PolaroidContext } from '@/(mx)/(portal)/(polaroid-epic)/handler/polaroid/main';
import { reservePosition } from '@/(lgx)/internal/calls/auth/reserve/main';

export function PortalReserveForm() {
  const { variant } = useContext(PolaroidContext);
  const categories = portalModel.categories.example;
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [role, changeRole] = useState('');

  const attemptReserve = async () => {
    reservePosition(fname, lname, email).then((res) => {
      alert('Position reserved.');
      window.location.href = '/';
    });
  };

  return (
    <PortalForm>
      <PortalVersesTextHeader />
      <PortalFormBody>
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder={variant === 'm' ? 'Jason' : 'Taylor'}
          type='text'
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder={variant === 'm' ? 'Yu' : 'Swift'}
          type='text'
        />
        <PortalFormInput
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder='email@studio.com'
          type='text'
        />
        <PortalFormSelect
          value={role}
          onChange={(e) => {
            changeRole(e.target.value);
          }}
        >
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </PortalFormSelect>
      </PortalFormBody>
      <PortalFormAction onClick={() => attemptReserve()}>
        RESERVE
      </PortalFormAction>
    </PortalForm>
  );
}

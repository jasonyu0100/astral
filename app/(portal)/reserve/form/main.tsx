import { useContext, useState } from 'react';
import { PortalFormAction } from '@/(portal)/polaroid-epic/container/form/action-container/action/main';
import { PortalFormInput } from '@/(portal)/polaroid-epic/container/form/body/input/main';
import { PortalFormBody } from '@/(portal)/polaroid-epic/container/form/body/main';
import { PortalFormSelect } from '@/(portal)/polaroid-epic/container/form/body/select/main';
import { PortalForm } from '@/(portal)/polaroid-epic/container/form/main';
import { PortalCosmosTextHeader } from '@/(portal)/polaroid-epic/container/form/text-header/main';
import { portalModel } from '@/(portal)/polaroid-epic/model/main';
import { amplifyClient } from '@/client';
import { createReservationObj } from '@/graphql/mutations';
import { PolaroidContext } from '@/(portal)/polaroid-epic/handler/polaroid/main';

export function PortalReserveForm() {
  const { variant} = useContext(PolaroidContext)
  const categories = portalModel.categories.example;
  const [fname, changeFname] = useState('');
  const [lname, changeLname] = useState('');
  const [email, changeEmail] = useState('');
  const [role, changeRole] = useState('');

  const attemptReserve = async () => {
    const payload = await amplifyClient.graphql({
      query: createReservationObj,
      variables: {
        input: {
          fname: fname,
          lname: lname,
          email: email,
        },
      },
    });
    window.location.href = '/';

    // fetch('/api/portal/reserve', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     fname: fname,
    //     lname: lname,
    //     email: email,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     res.json().then((user) => {
    //       alert('Reserve Success');
    //       window.location.href = '/';
    //     });
    //   } else {
    //     alert('Reserve Failed');
    //   }
    // });
  };

  return (
    <PortalForm>
      <PortalCosmosTextHeader />
      <PortalFormBody>
        <PortalFormInput
          value={fname}
          onChange={(e) => changeFname(e.target.value)}
          placeholder={variant === 'm' ? 'John': 'Taylor'}
          type='text'
        />
        <PortalFormInput
          value={lname}
          onChange={(e) => changeLname(e.target.value)}
          placeholder={variant === 'm' ? 'Mayer': 'Swift'}
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

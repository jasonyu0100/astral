import { useState } from 'react';
import { Abstract } from './abstract/main';
import { Meta } from './meta/main';
import { Misc } from './misc/main';
import { Payouts } from './payouts/main';
import { Phases } from './phases/main';
import { Terminology } from './terminology/main';
import { Force } from './force/main';

export function GameDescription() {
  const [access, setAccess] = useState(false);

  return (
    <div className='flex flex-col'>
      <Abstract />
      <Terminology />
      <Payouts/>
      <Phases/>
      <Misc/>
      <Meta/>
      {access && <Force/>}
    </div>
  );
}

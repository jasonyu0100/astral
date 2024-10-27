'use client';
import { useContext } from 'react';
import { PortalContainer } from '../common/container/main';
import { PortalWrapper } from '../common/container/wrapper/main';
import { PolaroidContext } from '../common/handler/polaroid/main';
import { PortalRegisterForm } from './form/main';

export function RegisterView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        <PortalRegisterForm />
      </PortalContainer>
    </PortalWrapper>
  );
}

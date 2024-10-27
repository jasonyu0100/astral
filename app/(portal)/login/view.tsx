'use client';
import { useContext } from 'react';
import { PortalContainer } from '../common/container/main';
import { PortalWrapper } from '../common/container/wrapper/main';
import { PolaroidContext } from '../common/handler/polaroid/main';
import { PortalLoginForm } from './form/main';

export function LoginView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        <PortalLoginForm />
      </PortalContainer>
    </PortalWrapper>
  );
}

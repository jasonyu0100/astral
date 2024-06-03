'use client';
import { useContext } from 'react';
import { PortalWrapper } from '../(common)/container/wrapper/main';
import { PortalContainer } from '../(common)/container/main';
import { PortalGalleryView } from '../(common)/container/gallery/main';
import { PortalContainerFlip } from '../(common)/container/flip/main';
import { PolaroidContext } from '../(common)/handler/polaroid/main';
import { PortalRegisterForm } from './form/main';

export function RegisterView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        {!flipped ? <PortalGalleryView /> : <PortalRegisterForm />}
      </PortalContainer>
      <PortalContainerFlip />
    </PortalWrapper>
  );
}

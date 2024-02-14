'use client';
import { useContext } from 'react';
import { PortalWrapper } from '../(polaroid-epic)/container/wrapper/main';
import { PortalContainer } from '../(polaroid-epic)/container/main';
import { PortalGalleryView } from '../(polaroid-epic)/container/gallery/main';
import { PortalContainerFlip } from '../(polaroid-epic)/container/flip/main';
import { PolaroidContext } from '../(polaroid-epic)/handler/polaroid/main';
import { PortalLoginForm } from './form/main';

export function LoginView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        {!flipped ? <PortalGalleryView /> : <PortalLoginForm />}
      </PortalContainer>
      <PortalContainerFlip />
    </PortalWrapper>
  );
}

'use client';
import { useContext } from 'react';
import { PortalWrapper } from '../(common)/container/wrapper/main';
import { PortalContainer } from '../(common)/container/main';
import { PortalGalleryView } from '../(common)/container/gallery/main';
import { PortalContainerFlip } from '../(common)/container/flip/main';
import { PortalReserveForm } from './form/main';
import { PolaroidContext } from '../(common)/handler/polaroid/main';

export function ReserveView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        {!flipped ? <PortalGalleryView /> : <PortalReserveForm />}
      </PortalContainer>
      <PortalContainerFlip />
    </PortalWrapper>
  );
}

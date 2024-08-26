'use client';
import { useContext } from 'react';
import { PortalContainerFlip } from '../common/container/flip/main';
import { PortalGalleryView } from '../common/container/gallery/main';
import { PortalContainer } from '../common/container/main';
import { PortalWrapper } from '../common/container/wrapper/main';
import { PolaroidContext } from '../common/handler/polaroid/main';
import { PortalReserveForm } from './form/main';

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

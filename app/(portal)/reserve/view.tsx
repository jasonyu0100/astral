'use client';
import { useContext } from 'react';
import { PortalGalleryView } from '../common/container/gallery/main';
import { PortalContainer } from '../common/container/main';
import { PortalWrapper } from '../common/container/wrapper/main';
import { PolaroidContext } from '../common/handler/polaroid/main';

export function ReserveView() {
  const { flipped } = useContext(PolaroidContext);

  return (
    <PortalWrapper>
      <PortalContainer>
        <PortalGalleryView />
      </PortalContainer>
    </PortalWrapper>
  );
}

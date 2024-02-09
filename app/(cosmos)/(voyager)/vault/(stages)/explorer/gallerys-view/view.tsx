'use client';
import { GallerysBody } from './gallerys-epic/main';
import { GallerysModalView } from '@/(cosmos)/(modals)/gallerys-modal/view';

export function ExploreGallerysView() {
  return (
    <>
      <GallerysModalView />
      <GallerysBody />
    </>
  );
}

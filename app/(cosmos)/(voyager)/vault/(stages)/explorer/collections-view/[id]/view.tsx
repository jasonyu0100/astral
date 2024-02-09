'use client';
import { CollectionsModalView } from '@/(cosmos)/(modals)/collections-modal/view';
import { CollectionsBody } from './collections-epic/main';

export function ExploreCollectionsView() {

  return (
    <>
      <CollectionsModalView />
      <CollectionsBody/>
    </>
  );
}

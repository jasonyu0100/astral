'use client';
import { ResourcesModalView } from '@/(cosmos)/(modals)/resources-modal/view';
import { ResourcesBody } from './resources-epic/main';

export default function ExploreResourcesView() {
  return (
    <>
      <ResourcesModalView />
      <ResourcesBody />
    </>
  );
}

import {
  FileObj,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  useResourceEditModal,
  ResourceModalContext,
} from '@/(modals)/(studio)/resource/resource-modal/main';
import { ResourceModalView } from '@/(modals)/(studio)/resource/resource-modal/view';
import { useContext } from 'react';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';
import { ResourcePolaroid } from './polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';

export function SidebarCollectionResource() {
  const { starHandler } = useContext(DraftContext);
  const resource = useContext(ResourceContext);
  const modalContext = useResourceEditModal();

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <ResourcePolaroid
        onClick={() =>
          starHandler.queryCreateFileStar(
            resource.title,
            resource.description,
            Math.random() * 500,
            Math.random() * 500,
            resource?.file || ({} as FileObj),
          )
        }
      >
        <CollectionResourceMedia />
      </ResourcePolaroid>
    </ResourceModalContext.Provider>
  );
}

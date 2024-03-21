import {
  FileObj,
} from '@/(logic)/internal/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/model/resource/main';
import {
  useResourceEditModal,
  ResourceModalContext,
} from '@/(modals)/(studio)/resource/resource-modal/main';
import { ResourceModalView } from '@/(modals)/(studio)/resource/resource-modal/view';
import { useContext } from 'react';
import { ResourcePolaroid } from './polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function SidebarCollectionResource() {
  const starsHandler = useContext(StarsHandlerContext)
  const resource = useContext(ResourceContext);
  const modalContext = useResourceEditModal();

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <ResourcePolaroid
        onClick={() =>
          starsHandler.starActions.createFromFile(
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

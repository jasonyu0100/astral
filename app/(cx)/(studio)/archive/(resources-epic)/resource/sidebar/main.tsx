import {
  FileObj,
  FileVariant,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(modals)/studio/resource/resource-modal/main';
import { ResourceModalView } from '@/(modals)/studio/resource/resource-modal/view';
import { useContext } from 'react';
import { CollectionResourceAudio } from '../common/audio/main';
import { CollectionResourceImage } from '../common/image/main';
import { CollectionResourceVideo } from '../common/video/main';
import { DraftContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';
import { ResourcePolaroid } from './polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';

export function SidebarCollectionResource() {
  const { starHandler } = useContext(DraftContext);
  const resource = useContext(ResourceContext);
  const modalContext = useFileModal();
  const variant = resource?.file?.variant;

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <ResourcePolaroid
        onClick={() =>
          starHandler.queryCreateFileStar(
            resource.title,
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

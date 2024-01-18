import { CollectionObj } from '@/tables/gallery/collection/main';
import { CollectionCover } from './cover/main';
import { CollectionInfo } from './info/main';
import { GalleryCollectionContainer } from '../container/main';
import { LinkInputProps } from '@/(common)/types/main';
import { driveMap } from '@/(cosmos)/(voyager)/drive/map';
import { createContext } from 'react';

interface InputProps extends LinkInputProps {
  collection: CollectionObj;
  index: number;
}

interface GalleryCollectionContextObj {
  collection: CollectionObj;
  index: number;
}

export const GalleryCollectionContext = createContext<GalleryCollectionContextObj>(
  {} as GalleryCollectionContextObj,
);

export function GalleryCollection({ collection, index }: InputProps) {
  return (
    <GalleryCollectionContext.Provider value={{ collection, index }}>
      <a href={driveMap.drive.explore.collection.id.link(collection.id)}>
        <GalleryCollectionContainer>
          <CollectionCover />
          <CollectionInfo />
        </GalleryCollectionContainer>
      </a>
    </GalleryCollectionContext.Provider>
  );
}

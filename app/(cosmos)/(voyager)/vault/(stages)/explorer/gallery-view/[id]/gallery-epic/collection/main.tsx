import { CollectionObj } from '@/tables/gallery/collection/main';
import { CollectionCover } from './cover/main';
import { CollectionInfo } from './info/main';
import { GalleryCollectionContainer } from './container/main';
import { vaultMap } from '@/(cosmos)/(voyager)/vault/map';
import { createContext } from 'react';
import Link from 'next/link';

interface InputProps {
  collection: CollectionObj;
  index: number;
}

interface GalleryCollectionContextObj {
  collection: CollectionObj;
  index: number;
}

export const GalleryCollectionContext =
  createContext<GalleryCollectionContextObj>({} as GalleryCollectionContextObj);

export function GalleryCollection({ collection, index }: InputProps) {
  return (
    <GalleryCollectionContext.Provider value={{ collection, index }}>
      <Link href={vaultMap.vault.explorer.collection.id.link(collection.id)}>
        <GalleryCollectionContainer>
          <CollectionCover />
          <CollectionInfo />
        </GalleryCollectionContainer>
      </Link>
    </GalleryCollectionContext.Provider>
  );
}

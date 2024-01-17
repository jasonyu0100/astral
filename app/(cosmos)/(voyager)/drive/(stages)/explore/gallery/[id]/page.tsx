"use client";
import { createContext, useEffect, useState } from "react";
import { DriveSectionView } from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { collectionTable, galleryTable } from "@/tables/gallery/table";
import insideCosmos from "@/utils/isAuth";
import { amplifyClient } from "@/client";
import { getGalleryObj, listCollectionObjs } from "@/graphql/queries";

export interface ExploreGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  addCollection: (folder: CollectionObj) => void;
}

export const ExploreGalleryContext = createContext<ExploreGalleryContextObj>({
  gallery: {} as GalleryObj,
  collections: [],
  addCollection: () => {},
});

function Page({ params }: { params: { id: string } }) {
  const [gallery, changeGallery] = useState<GalleryObj>(galleryTable.example);
  const [collections, changeCollections] = useState<CollectionObj[]>([]);

  useEffect(() => {
    getGallery(params.id).then(gallery => getCollections(gallery));
  }, []);

  const getGallery = async (id: string) => {
      const payload = await amplifyClient.graphql({
        query: getGalleryObj,
        variables: {
          id,
        },
      });
      const gallery: GalleryObj = payload?.data? || {};
      changeGallery(gallery);
      return gallery;
  };

  const getCollections = async (gallery: GalleryObj) => {
      const payload = await amplifyClient.graphql({
        query: listCollectionObjs,
        variables: {
          filter: {
            galleryId: {
              eq: gallery.id,
            },
          }
        },
      });
      const collections: CollectionObj[] =
        payload?.data?.listCollectionObjs?.items || [];
      changeCollections(collections);
  };

  const addCollection = (collection: CollectionObj) => {
    changeCollections((prev) => [...prev, collection]);
  };

  const context: ExploreGalleryContextObj = {
    gallery,
    collections,
    addCollection,
  };

  return (
    <ExploreGalleryContext.Provider value={context}>
      <DriveSectionView />
    </ExploreGalleryContext.Provider>
  );
}

export default insideCosmos(Page);

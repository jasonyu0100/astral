"use client";
import { createContext, useEffect, useState } from "react";
import { DriveSectionView } from "./view";
import { GalleryObj } from "@/tables/gallery/main";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { galleryTable } from "@/tables/gallery/table";
import insideCosmos from "@/utils/isAuth";
import { amplifyClient } from "@/client";
import { getGalleryObj, listCollectionObjs } from "@/graphql/queries";
import { FileObj } from "@/tables/file/main";
import {
  createCollectionObj,
  createReservationObj,
  createResourceObj,
} from "@/graphql/mutations";
import { ResourceObj } from "@/tables/resource/main";

export interface ExploreGalleryContextObj {
  gallery: GalleryObj;
  collections: CollectionObj[];
  addCollection: (name: string, files: FileObj[]) => void;
}

export const ExploreGalleryContext = createContext<ExploreGalleryContextObj>({
  gallery: {} as GalleryObj,
  collections: [],
  addCollection: function (name: string, files: FileObj[]): void {
    throw new Error("Function not implemented.");
  }
});

function Page({ params }: { params: { id: string } }) {
  const [gallery, changeGallery] = useState<GalleryObj>(galleryTable.example);
  const [collections, changeCollections] = useState<CollectionObj[]>([]);

  useEffect(() => {
    getGallery(params.id).then((gallery) => getCollections(gallery));
  }, []);

  const getGallery = async (id: string) => {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: {
        id,
      },
    });
    const gallery: GalleryObj = payload?.data.getGalleryObj || {};
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
        },
      },
    });
    const collections: CollectionObj[] =
      payload?.data?.listCollectionObjs?.items || [];
    changeCollections(collections);
  };

  const addCollection = async (name: string, files: FileObj[]) => {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: {
          name,
          galleryId: gallery.id,
        },
      },
    });
    const collection: CollectionObj = payload?.data?.createCollectionObj || {};
    changeCollections((prev) => [...prev, collection]);
  };

  const addResources = async (collection: CollectionObj, files: FileObj[]) => {
    const resources = []
    for (let file of files) {
      const payload = await amplifyClient.graphql({
        query: createResourceObj,
        variables: {
          input: {
            name: file.name || "",
            description: file.name || "",
            collectionId: collection.id,
            file: file,
          },
        },
      });
      const resource: ResourceObj = payload?.data?.createResourceObj || {};
      resources.push(resource)
    }
    return resources
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

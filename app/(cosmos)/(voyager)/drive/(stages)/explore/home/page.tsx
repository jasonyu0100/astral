"use client";
import { createContext, useEffect, useState } from "react";
import { GalleryObj } from "@/tables/gallery/main";
import { galleryTable } from "@/tables/gallery/table";
import { ExploreView } from "./view";
import insideCosmos from "@/utils/isAuth";
import { amplifyClient } from "@/graphql/main";
import { listGalleryObjs } from "@/graphql/queries";

export interface ExploreHomeContext {
  gallerys: GalleryObj[];
  addGallery: (section: GalleryObj) => void;
}

export const ExploreHomeContext = createContext<ExploreHomeContext>({
  gallerys: [],
  addGallery: () => {},
});

function Page() {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);

  useEffect(() => {
    getGallerys();
  }, []);

  const getGallerys = async () : Promise<GalleryObj[]> => {
    if (process.env.NEXT_PUBLIC_MOCKED === "true") {
      const gallerys = galleryTable.examples;
      changeGallerys(gallerys);
      return gallerys
    } else {
      const payload = await amplifyClient.graphql({
        query: listGalleryObjs,
        variables: {},
      });
      const gallerys: GalleryObj[] = payload?.data?.listGalleryObjs?.items || [];
      changeGallerys(gallerys);
      return gallerys
    }
  };

  const addGallery = (gallery: GalleryObj) => {
    changeGallerys((prev) => {
      return [...prev, gallery];
    });
  };

  const context: ExploreHomeContext = {
    gallerys,
    addGallery,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <ExploreView />
    </ExploreHomeContext.Provider>
  );
}

export default insideCosmos(Page);

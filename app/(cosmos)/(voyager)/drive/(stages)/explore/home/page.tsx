"use client";
import { createContext, useEffect, useState } from "react";
import { GalleryObj } from "@/tables/gallery/main";
import { ExploreView } from "./view";
import insideCosmos from "@/utils/isAuth";
import { amplifyClient } from "@/client";
import { listGalleryObjs } from "@/graphql/queries";
import { useUser } from "@/state/main";

export interface ExploreHomeContext {
  gallerys: GalleryObj[];
  addGallery: (section: GalleryObj) => void;
}

export const ExploreHomeContext = createContext<ExploreHomeContext>({
  gallerys: [],
  addGallery: () => {},
});

function Page() {
  const [state, actions] = useUser();
  const [gallerys, changeGallerys] = useState<GalleryObj[]>([]);

  useEffect(() => {
    getGallerys();
  }, []);

  const getGallerys = async () => {
    const payload = await amplifyClient.graphql({
      query: listGalleryObjs,
      variables: {
        filter: {
          userId: {
            eq: state.user.id,
          },
        },
      },
    });
    const gallerys: GalleryObj[] = payload?.data?.listGalleryObjs?.items || [];
    changeGallerys(gallerys);
    return gallerys;
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

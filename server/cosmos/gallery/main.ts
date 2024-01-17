import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createGalleryObj } from "../../graphql/mutations";
import { getGalleryObj, listGalleryObjs } from "../../graphql/queries";

export const galleryRouter = Router();

galleryRouter.post("/create", async (req: Request, res: Response) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;

  const inputPayload = {
    title: title,
    description: description,
    image: image,
    collectionIds: [],
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createGalleryObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create gallery:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

galleryRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getGalleryObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get gallery:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

galleryRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const collectionIds = req.body.collectionIds;

  const inputPayload: any = {
    id: id,
  };
  if (title) inputPayload.title = title;
  if (description) inputPayload.description = description;
  if (image) inputPayload.image = image;
  if (collectionIds) inputPayload.collectionIds = collectionIds;

  try {
    const payload = await amplifyClient.graphql({
      query: createGalleryObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update gallery:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

galleryRouter.post("/list", async (req: Request, res: Response) => {
  const title = req.body.title;

  const filterPayload = {
    title: {
      contains: title,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listGalleryObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list gallery:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";
import {
  createCollectionObj,
  updateCollectionObj,
} from "../../../graphql/mutations";
import { getCollectionObj, listCollectionObjs } from "../../../graphql/queries";

export const collectionRouter = Router();

collectionRouter.post("/create", async (req: Request, res: Response) => {
  const name = req.body.name;
  const resourceIds = req.body.resourceIds;

  const inputPayload = {
    name: name,
    resourceIds: resourceIds,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createCollectionObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

collectionRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getCollectionObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

collectionRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const resourceIds = req.body.resourceIds;

  const inputPayload : any = {
    id: id,
  };
  if (name) inputPayload.name = name;
  if (resourceIds) inputPayload.resourceIds = resourceIds;

  try {
    const payload = await amplifyClient.graphql({
      query: updateCollectionObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

collectionRouter.post("/list", async (req: Request, res: Response) => {
  const name = req.body.name;

  const filterPayload = {
    name: {
      contains: name,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listCollectionObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

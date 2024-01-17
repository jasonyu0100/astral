import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";
import {
  createConstellationObj,
  updateConstellationObj,
} from "../../../graphql/mutations";
import {
  getConstellationObj,
  listConstellationObjs,
} from "../../../graphql/queries";

export const constellationRouter = Router();

constellationRouter.post("/create", async (req: Request, res: Response) => {
  const title = req.body.title;
  const description = req.body.description;
  const stars = req.body.stars;

  const inputPayload = {
    title: title,
    description: description,
    stars: stars,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createConstellationObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create constellation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

constellationRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getConstellationObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get constellation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

constellationRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const stars = req.body.stars;

  const inputPayload: any = {
    id: id,
  };
  if (title) inputPayload.title = title;
  if (stars) inputPayload.stars = stars;

  try {
    const payload = await amplifyClient.graphql({
      query: updateConstellationObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update constellation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

constellationRouter.post("/list", async (req: Request, res: Response) => {
  const title = req.body.title;

  const filterPayload: any = {
    title: {
      contains: title,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listConstellationObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list constellation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

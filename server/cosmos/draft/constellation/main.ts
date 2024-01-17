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
  const gql = req.body.gql;
  let inputPayload;
  if (!gql) {
    const title = req.body.title;
    const description = req.body.description;
    const stars = req.body.stars;

    inputPayload = {
      title: title,
      description: description,
      stars: stars,
    };
  } else {
    inputPayload = gql;
  }

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
  const gql = req.body.gql;
  let inputPayload: any;
  if (!gql) {
    const id = req.body.id;
    const title = req.body.title;
    const stars = req.body.stars;

    inputPayload = {
      id: id,
    };
    if (title) inputPayload.title = title;
    if (stars) inputPayload.stars = stars;
  } else {
    inputPayload = gql;
  }

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
  const gql = req.body.gql;
  let inputPayload: any;
  if (!gql) {
    const title = req.body.title;
    inputPayload = {
      filter: {
        title: {
          contains: title,
        },
      },
    };
  } else {
    inputPayload = gql;
  }

  try {
    const payload = await amplifyClient.graphql({
      query: listConstellationObjs,
      variables: inputPayload
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list constellation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

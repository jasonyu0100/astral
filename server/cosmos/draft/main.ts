import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createDraftObj, updateDraftObj } from "../../graphql/mutations";
import { getDraftObj, listDraftObjs } from "../../graphql/queries";

export const draftRouter = Router();

draftRouter.post("/create", async (req: Request, res: Response) => {
  const gql = req.body.gql;
  let inputPayload;
  if (!gql) {
    const constellationIds = req.body.constellationIds;

    inputPayload = {
      constellationIds: constellationIds,
    };
  } else {
    inputPayload = gql;
  }

  try {
    const payload = await amplifyClient.graphql({
      query: createDraftObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create draft:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

draftRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;

  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getDraftObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get draft:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

draftRouter.post("/update", async (req: Request, res: Response) => {
  const gql = req.body.gql;
  let inputPayload;
  if (!gql) {
    const id = req.body.id;
    const constellationIds = req.body.constellationIds;

    inputPayload = {
      id: id,
      constellationIds: constellationIds,
    };
  } else {
    inputPayload = gql;
  }

  try {
    const payload = await amplifyClient.graphql({
      query: updateDraftObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update draft:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

draftRouter.post("/list", async (req: Request, res: Response) => {
  const gql = req.body.gql;
  let inputPayload;
  if (!gql) {
    inputPayload = {};
  } else {
    const id = req.body.id;
    inputPayload = {
      filter: {
        id: {
          eq: id,
        },
      },
    };
  }

  try {
    const payload = await amplifyClient.graphql({
      query: listDraftObjs,
      variables: inputPayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list draft:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

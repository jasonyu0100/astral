import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createStormObj, updateStormObj } from "../../graphql/mutations";
import { getStormObj, listStormObjs } from "../../graphql/queries";

export const stormRouter = Router();

stormRouter.post("/create", async (req: Request, res: Response) => {
  const inputPayload = {
    chatIds: [],
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createStormObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create storm:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

stormRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getStormObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get storm:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

stormRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const chatIds = req.body.chatIds;

  const inputPayload = {
    id: id,
    chatIds: chatIds,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: updateStormObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update storm:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

stormRouter.post("/list", async (req: Request, res: Response) => {
  const id = req.body.id;
  const filterPayload = {
    id: {
      eq: id,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listStormObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list storm:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

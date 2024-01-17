import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";
import { createChatObj, updateStormObj } from "../../../graphql/mutations";
import { getStormObj, listStormObjs } from "../../../graphql/queries";

export const chatRouter = Router();

chatRouter.post("/create", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const summary = req.body.summary;
  const time = req.body.time;

  const inputPayload = {
    id,
    title,
    summary,
    time,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createChatObj,
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

chatRouter.post("/get", async (req: Request, res: Response) => {
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

chatRouter.post("/update", async (req: Request, res: Response) => {
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

chatRouter.post("/list", async (req: Request, res: Response) => {
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

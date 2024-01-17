import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";
import { createChapterObj, updateChapterObj } from "../../../graphql/mutations";
import { getChapterObj, listChapterObjs } from "../../../graphql/queries";

export const chapterRouter = Router();

chapterRouter.post("/create", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const stormId = req.body.stormId;
  const draftId = req.body.draftId;
  const flowId = req.body.flowId;
  const seaId = req.body.seaId;

  const inputPayload = {
    id,
    title,
    description,
    stormId,
    draftId,
    flowId,
    seaId,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createChapterObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create chapter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

chapterRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getChapterObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get chapter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

chapterRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const stormId = req.body.stormId;
  const draftId = req.body.draftId;
  const flowId = req.body.flowId;
  const seaId = req.body.seaId;

  const inputPayload = {
    id,
    title,
    description,
    stormId,
    draftId,
    flowId,
    seaId,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: updateChapterObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update chapter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

chapterRouter.post("/list", async (req: Request, res: Response) => {
  const title = req.body.title;
  const filterPayload = {
    title: {
      contains: title,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listChapterObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list chapter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

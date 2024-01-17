import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";
import { createMomentObj, updateMomentObj } from "../../../graphql/mutations";
import { getMomentObj, listMomentObjs } from "../../../graphql/queries";

export const momentRouter = Router();

momentRouter.post("/create", async (req: Request, res: Response) => {
  const spaceId = req.body.spaceId;
  const title = req.body.title;
  const userId = req.body.userId;
  const time = req.body.time;
  const log = req.body.log;
  const file = req.body.file;
  const visibility = req.body.visibility;

  const inputPayload = {
    title: title,
    spaceId: spaceId,
    userId: userId,
    time: time,
    log: log,
    file: file,
    visibility: visibility,
    comments: [],
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createMomentObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create moment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

momentRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getMomentObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get moment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

momentRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title;
  const spaceId = req.body.spaceId;
  const userId = req.body.userId;
  const time = req.body.time;
  const log = req.body.log;
  const file = req.body.file;
  const visibility = req.body.visibility;
  const comments = req.body.comments;

  const inputPayload: any = {
    id: id,
  };
  if (title) inputPayload.title = title;
  if (spaceId) inputPayload.spaceId = spaceId;
  if (userId) inputPayload.userId = userId;
  if (time) inputPayload.time = time;
  if (log) inputPayload.log = log;
  if (file) inputPayload.file = file;
  if (visibility) inputPayload.visibility = visibility;
  if (comments) inputPayload.comments = comments;

  try {
    const payload = await amplifyClient.graphql({
      query: updateMomentObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update moment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

momentRouter.post("/list", async (req: Request, res: Response) => {
  const title = req.body.title;
  const spaceId = req.body.spaceId;
  const userId = req.body.userId;
  const visibility = req.body.visibility;

  const filterPayload = {
    title: {
      contains: title,
    },
    spaceId: {
        eq: spaceId,
    },
    userId: {
        eq: userId,
    },
    visibility: {
        eq: visibility,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listMomentObjs,
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

import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createSpaceObj, updateSpaceObj } from "../../graphql/mutations";
import { getSpaceObj, listSpaceObjs } from "../../graphql/queries";

export const spaceRouter = Router();

spaceRouter.post("/create", async (req: Request, res: Response) => {
  const title = req.body.title;
  const description = req.body.description;

  const inputPayload = {
    title: title,
    description: description,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createSpaceObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create space:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

spaceRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getSpaceObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get space:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

spaceRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const title = req.body.title || false;
  const description = req.body.description;
  const chapters = req.body.chapters;

  let inputPayload: any = {
    id: id,
  };
  if (title) inputPayload.title = title;
  if (description) inputPayload.description = description;
  if (chapters) inputPayload.chapters = chapters;

  try {
    const payload = await amplifyClient.graphql({
      query: updateSpaceObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update space:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

spaceRouter.post("/list", async (req: Request, res: Response) => {
  const title = req.body.title || false;

  let filterPayload: any = {
    title: {
      eq: title,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listSpaceObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update space:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

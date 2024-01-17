import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createResourceObj, updateResourceObj } from "../../graphql/mutations";
import { getResourceObj, listResourceObjs } from "../../graphql/queries";

export const resourceRouter = Router();

resourceRouter.post("/create", async (req: Request, res: Response) => {
  const label = req.body.label;
  const description = req.body.description;
  const file = req.body.file;

  const inputPayload = {
    label,
    description,
    file,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createResourceObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

resourceRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getResourceObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get resource:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

resourceRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const label = req.body.label;
  const description = req.body.description;
  const file = req.body.file;

  const inputPayload: any = {
    id: id,
  };
  if (label) inputPayload.label = label;
  if (description) inputPayload.description = description;
  if (file) inputPayload.file = file;

  try {
    const payload = await amplifyClient.graphql({
      query: updateResourceObj,
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

resourceRouter.post("/list", async (req: Request, res: Response) => {
  const id = req.body.id;
  const filterPayload = {
    label: {
      contains: id,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listResourceObjs,
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

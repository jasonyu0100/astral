import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";
import { createFlowObj, updateFlowObj } from "../../graphql/mutations";
import { getFlowObj, listFlowObjs } from "../../graphql/queries";

export const flowRouter = Router();

flowRouter.post("/create", async (req: Request, res: Response) => {
  const momentIds = req.body.momentIds;

  const inputPayload = {
    momentIds: momentIds,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createFlowObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during create flow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

flowRouter.post("/get", async (req: Request, res: Response) => {
  const id = req.body.id;
  const variablePayload = {
    id: id,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: getFlowObj,
      variables: variablePayload,
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during get flow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

flowRouter.post("/update", async (req: Request, res: Response) => {
  const id = req.body.id;
  const momentIds = req.body.momentIds;

  const inputPayload: any = {
    id: id,
  };

  if (momentIds) {
    inputPayload.momentIds = momentIds;
  }

  try {
    const payload = await amplifyClient.graphql({
      query: updateFlowObj,
      variables: {
        input: inputPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during update flow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

flowRouter.post("/list", async (req: Request, res: Response) => {
  const id = req.body.id;
  const filterPayload = {
    id: {
      eq: id,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listFlowObjs,
      variables: {
        filter: filterPayload,
      },
    });

    return res.json({ data: payload });
  } catch (error) {
    console.error("Error during list flow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

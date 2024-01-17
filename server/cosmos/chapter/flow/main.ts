import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";

export const flowRouter = Router();

flowRouter.post("/", async (req: Request, res: Response) => {

});
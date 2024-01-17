import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";

export const collectionRouter = Router();

collectionRouter.post("/", async (req: Request, res: Response) => {

});
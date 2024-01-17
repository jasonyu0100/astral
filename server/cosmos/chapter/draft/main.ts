import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../graphql/main";

export const draftRouter = Router();

draftRouter.post("/", async (req: Request, res: Response) => {

});
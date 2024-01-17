import { Request, Response, Router } from "express";
import { amplifyClient } from "../../../../graphql/main";

export const chatRouter = Router();

chatRouter.post("/", async (req: Request, res: Response) => {

});
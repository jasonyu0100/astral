import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";

export const chapterRouter = Router();

chapterRouter.post("/", async (req: Request, res: Response) => {

});
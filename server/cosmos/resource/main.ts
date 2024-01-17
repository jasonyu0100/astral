import { Request, Response, Router } from "express";
import { amplifyClient } from "../../graphql/main";

export const resourceRouter = Router();

resourceRouter.post("/", async (req: Request, res: Response) => {

});
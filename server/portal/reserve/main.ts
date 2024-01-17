import { Request, Response, Router } from "express";
import { createReservationObj } from "../../graphql/mutations";
import { amplifyClient } from "../../graphql/main";

const reserveRouter = Router();

reserveRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;

  const inputPayload = {
    fname: fname,
    lname: lname,
    email: email,
  };

  try {
    const payload = await amplifyClient.graphql({
      query: createReservationObj,
      variables: {
        input: inputPayload,
      },
    });
    res.json({ data: payload });
  } catch (error) {
    console.error("Error during reserve:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { reserveRouter };

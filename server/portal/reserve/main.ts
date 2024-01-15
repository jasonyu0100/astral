import { Request, Response, Router } from "express";
import { amplifyClient } from "../..";
import { createReservationObj } from "../../mutations";

const reserveRouter = Router();

reserveRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const role = data.role;

  try {
    const payload = {
      fname,
      lname,
      email,
      role,
    };
    console.log(payload);

    const gqlResp = await amplifyClient.graphql({
      query: createReservationObj,
      variables: {
        input: {
          fname: fname,
          lname: lname,
          email: email,
        },
      },
    });
    console.log(gqlResp)

    res.json({ data: "Reserve successful!" });
  } catch (error) {
    console.error("Error during reserve:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { reserveRouter };

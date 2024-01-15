import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import { amplifyClient } from "../..";
import { createUserObj } from "../../graphql/mutations";
import { FileType } from "../../graphql/API";

const registerRouter = Router();

registerRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const password = data.password;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const payload = await amplifyClient.graphql({
      query: createUserObj,
      variables: {
        input: {
          fname,
          lname,
          email,
          passwordHash,
          spaceIds: [],
          galleryIds: [],
        },
      },
    });
    res.json({ data: payload.data.createUserObj });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

registerRouter.post("/google", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const googleId = data.googleId;
  const pfp = data.pfp

  try {
    const payload = await amplifyClient.graphql({
      query: createUserObj,
      variables: {
        input: {
          fname,
          lname,
          email,
          googleId,
          profileImage: {
            id: crypto.randomUUID(),
            src: pfp,
            type: FileType.IMAGE
          },
          spaceIds: [],
          galleryIds: [],
        },
      },
    });
    res.json({ data: payload.data.createUserObj });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { registerRouter}
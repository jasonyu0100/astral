import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import { listUserObjs } from "../../graphql/queries";
import { amplifyClient } from "../../client";
import { UserObj } from "../../graphql/API";

export const loginRouter = Router();

loginRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const password = data.password;
  const email = data.email;

  const filterPayload = {
    email: {
      eq: email,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listUserObjs,
      variables: {
        filter: filterPayload,
      },
    });
    const users = payload?.data?.listUserObjs?.items as unknown as UserObj[];

    if (users.length === 0) {
      res.status(401).json({ error: "Invalid Email" });
    } else {
      const user = users[0];
      const userHashedPassword = user?.passwordHash || "";
      try {
        const match = await bcrypt.compare(password, userHashedPassword);
        if (match) {
          user?.passwordHash && delete user.passwordHash;
          res.json({ data: user });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

loginRouter.post("/google", async (req: Request, res: Response) => {
  const data = req.body;
  const googleId = data.googleId;
  const email = data.email;

  const filterPayload = {
    googleId: {
      eq: googleId,
    },
    email: {
      eq: email,
    },
  };

  try {
    const payload = await amplifyClient.graphql({
      query: listUserObjs,
      variables: {
        filter: filterPayload,
      },
    });
    const users = payload?.data?.listUserObjs?.items as unknown as UserObj[];
    if (users.length === 0) {
      res.status(401).json({ error: "Invalid Google Id" });
    } else {
      const user = users[0];
      user?.passwordHash && delete user.passwordHash;
      res.json({ data: user });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

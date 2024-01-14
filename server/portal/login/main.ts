import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";

const loginRouter = Router();

loginRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const password = data.password;
  const email = data.email;

  const getHashedPassword = async (email: string) =>
    await bcrypt.hash(password, 10);

  try {
    const hashedPassword = await getHashedPassword(email);
    const match = await bcrypt.compare(password, hashedPassword);

    if (match) {
      const payload = {
        email,
        hashedPassword
      }
      console.log(payload)
      res.json({ data: "Login successful!" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

loginRouter.post("/google", async (req: Request, res: Response) => {
  const data = req.body;
  const password = data.password;
  const email = data.email;

  const getHashedPassword = async (email: string) =>
    await bcrypt.hash(password, 10);

  try {
    const hashedPassword = await getHashedPassword(email);
    const match = await bcrypt.compare(password, hashedPassword);

    if (match) {
      const payload = {
        email,
        hashedPassword
      }
      console.log(payload)
      res.json({ data: "Login successful!" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { loginRouter }
import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";

const registerRouter = Router();

registerRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const password = data.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const payload = {
      fname,
      lname,
      email,
      hashedPassword,
    }
    console.log(payload)
    res.json({ data: "Registration successful!" });
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
  const password = data.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const payload = {
      fname,
      lname,
      email,
      hashedPassword,
    }
    console.log(payload)
    res.json({ data: "Registration successful!" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { registerRouter}
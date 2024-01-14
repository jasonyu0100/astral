import express, { Request, Response, Router } from "express";
import bcrypt from "bcrypt";

const portalRouter = Router();

const secretKey = "your_random_secret_key"; // Replace this with a secure random key in a production environment

portalRouter.post("/register", async (req: Request, res: Response) => {
  const data = req.body;
  const fname = data.fname;
  const lname = data.lname;
  const email = data.email;
  const password = data.password;

  try {
    // Generate a salt and hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the hashed password in your database
    // Example: Save fname, lname, email, hashedPassword to your database
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

portalRouter.post("/login", async (req: Request, res: Response) => {
  const data = req.body;
  const password = data.password;
  const email = data.email;

  const getHashedPassword = async (email: string) =>
    await bcrypt.hash(password, 10);

  try {
    // Retrieve hashed password from your database based on the provided email
    // Example: const hashedPassword = retrieveHashedPasswordFromDatabase(email);

    // Compare the provided password with the stored hashed password
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

export { portalRouter };

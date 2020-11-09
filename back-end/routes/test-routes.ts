import express, { Request, Response } from "express";

const router = express.Router();

router.post("/test", (req: Request, res: Response) => {
  console.log(req.body);
  res.sendStatus(200);
});

export default router;

import express, { Request, Response } from "express";

const router = express.Router();
router.get("/test", (req: Request, res: Response) => {
  console.log("Get");
  res.sendStatus(200);
});

router.post("/test", (req: Request, res: Response) => {
  console.log(req.body);
  res.sendStatus(200);
});

export default router;

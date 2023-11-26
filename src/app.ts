import express, { Request, Response, Application } from "express";
const app: Application = express();
import cors from "cors";
import globalErrorHandler from "./app/Middleware/middleware";

//parser
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  // const a = 10;
  // res.send(a);
};

app.get("/", getAController);

app.use(globalErrorHandler);

export default app;

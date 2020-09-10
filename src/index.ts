import * as express from "express";
import { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
  console.log(add(4, 3));
});
app.get("/yeshtml5", (req: Request, res: Response) => {
  res.send("yeshtml5");
});
app.listen(5000, () => console.log("start"));

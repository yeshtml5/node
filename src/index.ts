import * as express from "express";

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;

const add = (a: number, b: number): number => a + b;
app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    console.log(add(4, 3));
  }
);
app.get("/yeshtml5", (req: express.Request, res: express.Response) => {
  res.send("yeshtml5");
});
app.listen(4000, () => console.log("start1"));

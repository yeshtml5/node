import * as express from "express";

class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}

const app = new App().application;
app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/yeshtml5", (req: express.Request, res: express.Response) => {
  res.send("yeshtml5");
});
app.listen(4000, () => console.log("start1"));

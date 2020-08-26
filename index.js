const app = require("express")();
const bodyParser = require("body-parser");
let registration = {};

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/leroy", (req, res) => res.send("Hello leroy!"));

app.post("/reg", function (req, res) {
  registration = req.body;
  console.log(registration);
  res.send("POST request to the homepage");
});

app.post("/points", function(req, res) {
  const object = req.body;

  console.log(object.scorer + ':' + object.points);
});

app.delete("/reg", function (req, res) {
  registration = {};
  res.send(registration);
});

app.get("/getreg", function (req, res) {
  res.send(registration);
  console.log("test");
});

const port = 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

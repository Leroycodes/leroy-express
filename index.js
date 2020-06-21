const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/leroy", (req, res) => res.send("Hello leroy!"));

app.post("/reg", function (req, res) {
  console.log(req.body);
  res.send("POST request to the homepage");
});

const port = 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

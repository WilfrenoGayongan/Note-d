import express from "express";
import path from "path/posix";
import bodyParser from "body-parser";

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {

    res.render("home");

})    

app.get("/*", (req, res) => {
    res.redirect("/");
});


app.listen(port,() => {
    console.log("running..")
});
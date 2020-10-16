// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const genRanHex = size =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
let readStream = stream =>
  new Promise((res, rej) => {
    let data = "";
    stream.on("data", chunk => (data += chunk));
    stream.on("end", () => res(data));
    stream.on("error", error => rej(error));
  });
const express = require("express");
const formData = require("express-form-data");
const os = require("os");
const fs = require("fs");
const SMTPServer = require("smtp-server").SMTPServer;
const app = express();
const getLicense = require("license").getLicense;
const nodemailer = require("nodemailer");
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.APIKEY_MAILGUN,
  domain: "mail.imm.codes"
});
const bodyParser = require("body-parser");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} = require("unique-names-generator");
const { LocaleDb } = require("informa-db.js");
const database = new LocaleDb({ path: "database.data", defaultStr: "{}" });
const emails = new LocaleDb({ path: "emails.data", defaultStr: "{}" });
const path = require("path")
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

// parse data with connect-multiparty.
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream
app.use(formData.stream());
// union the body and the files
app.use(formData.union());
//app.get("/ld47/assets/files.json", (req, res)=> fs.readdir(path.join(__dirname, 'public/ld47/assets'), (e,v)=>e?console.log(e):res.send(v)))
app.get("/api/generate-name", (req, res) => {
  let generate_no_duplicate = () => {
    let a = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: "-"
    });
    if (database.value[a]) a = generate_no_duplicate();
    return a;
  };
  res.header("Access-Control-Allow-Origin", "*").send(generate_no_duplicate());
});
app.post("/api/gotmail", (req, res) => {
  console.log(req.body, req.get("Content-Type"));
  if (!req.body.To.startsWith("meme+")) return res.send("Nope :/");
  req.body.To = req.body.To.substring(5);
  let data;
  if (!emails.value[req.body.To.split("@")[0]]) {
    data = {
      from: "Meme-License bot <bot@mail.imm.codes>",
      to: req.body.From,
      subject: "No such forwarding",
      text: "We did not find any user such as **meme+" + req.body.To + "**."
    };
  } else {
    data = {
      from: "Meme-License bot <bot@mail.imm.codes>",
      to: emails.value[req.body.To.split("@")[0]],
      subject: "Forwarded: "+req.body.Subject,
      text: req.body["body-plain"],
      html: req.body["body-html"]
    };
  }
  mg.messages().send(data, function(error, body) {
    console.log(body);
  });
  res.send("Got mail!");
});
app.post("/api/hostmemelicense", (req, res) => {
  if (!req.body.name) return res.status(400).send("No author name specified");
  if (!req.body.year) return res.status(400).send("No year specified");
  if (req.body.year < +new Date(Date.now()).getFullYear())
    return res.status(400).send("Year is before current year");
  if (req.body.year > +new Date(Date.now()).getFullYear() + 20)
    return res.status(400).send("Year is past the 20 year limit");
  if (database.value[req.body.name])
    return res.status(409).send("Name already taken");
  if (!req.body.author) return res.status(400).send("No author name specified");
  if (
    ![
      "D",
      "CC-BY-4.0",
      "CC-BY-SA-4.0",
      "CC-BY-ND-4.0",
      "CC-BY-NC-4.0",
      "CC-BY-NC-SA-4.0",
      "CC-BY-NC-ND-4.0"
    ].includes(req.body.license)
  )
    return res.status(400).send("Invalid license");
  if (
    !req.body.email
  )
    return res.status(400).send("No email provided");
  if (req.body.forwardto) {
    if (Object.entries(emails.value).every(([i, v]) => v != req.body.email)) {
      (() => {
        let rndStr = genRanHex(20);
        console.log(rndStr);
        if (emails.value[rndStr]) return this();
        emails.value[rndStr] = req.body.email;
        emails.update();
        req.body.email = `meme+${rndStr}@mail.imm.codes`;
      })();
    } else {
      let thing = Object.entries(emails.value).find(
        ([i, v]) => v == req.body.email
      );
      req.body.email = `meme+${thing[0]}@mail.imm.codes`;
    }
  }
  database.value[req.body.name] = {
    year: new Date(Date.now()).getFullYear() + " - " + req.body.year,
    author: req.body.author,
    license: req.body.license,
    email: req.body.email,
    pseudo: req.body.pseudo
  };
  database.update();
  return (
    res
      //.header("Access-Control-Allow-Origin", "*")
      .status(200)
      .send("https://42.imm.codes/api/mlreg/" + req.body.name)
  );
});
app.post("/api/genlicense", (req, res) => {
  if (!req.body.name) return res.status(400).send("No author name specified");
  if (!req.body.year) return res.status(400).send("No year specified");
  if (req.body.year < +new Date(Date.now()).getFullYear())
    return res.status(400).send("Year is before current year");
  if (req.body.year > +new Date(Date.now()).getFullYear() + 20)
    return res.status(400).send("Year is past the 20 year limit");
  if (database.value[req.body.name])
    return res.status(409).send("Name already taken");
  if (!req.body.author) return res.status(400).send("No author name specified");
  if (
    ![
      "D",
      "CC-BY-4.0",
      "CC-BY-SA-4.0",
      "CC-BY-ND-4.0",
      "CC-BY-NC-4.0",
      "CC-BY-NC-SA-4.0",
      "CC-BY-NC-ND-4.0"
    ].includes(req.body.license)
  )
    return res.status(400).send("Invalid license");
  if (
    !req.body.email
  )
    return res.status(400).send("No email provided");
  if (req.body.forwardto) {
    if (Object.entries(emails.value).every(([i, v]) => v != req.body.email)) {
      (() => {
        let rndStr = genRanHex(20);
        console.log(rndStr);
        if (emails.value[rndStr]) return this();
        emails.value[rndStr] = req.body.email;
        emails.update();
        req.body.email = `meme+${rndStr}@mail.imm.codes`;
      })();
    } else {
      let thing = Object.entries(emails.value).find(
        ([i, v]) => v == req.body.email
      );
      req.body.email = `meme+${thing[0]}@mail.imm.codes`;
    }
  }
  let ee = {
    year: new Date(Date.now()).getFullYear() + " - " + req.body.year,
    author: req.body.author,
    license: req.body.license,
    email: req.body.email,
    pseudo: req.body.pseudo
  };
  app.set("view engine", "pug");
  let year = ee.year.replace(
    /[A-z]+/g,
    new Date(Date.now()).getFullYear()
  );
  year = year.replace(" - " + new Date(Date.now()).getFullYear(), "");
  let message;
  switch (ee.license) {
    case "D":
      message = `Copyright ${year} ${ee.author} <${ee.email}>

Permission is hereby granted, free of charge, to any person getting access to
this content (the "Meme"), to deal with the Meme, including the rights to store
("download") and consume the Meme.

It it strictly prohibited to reupload ("repost") the Meme to any platform, to
sublicense the Meme, to resell the Meme and/or to modify the Meme.

THE MEME IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF CONSUMIBILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE MEME OR THE USE OR OTHER DEALINGS IN THE MEME.`;
      break;
    default:
      message = getLicense(ee.license, {
        author:
          ee.author +
          (ee.pseudo
            ? ` (${ee.pseudonym})`
            : ""),
        email: ee.email,
        year: year
      });
      break;
  }
  return res.send(`${ee.license!="D"?`Author: ${ee.author +
          (ee.pseudo
            ? ` (${ee.pseudo})`
            : "")}
Email: ${ee.email}
Year: ${year}

`:''}${message}`)
})
app.get("/api/mlreg/*", (req, res, next) => {
  let path = req.url.split("/");
  path = path.slice(2).join("/");
  console.log(path);
  if (!database.value[path]) return next();
  app.set("view engine", "pug");
  let year = database.value[path].year.replace(
    /[A-z]+/g,
    new Date(Date.now()).getFullYear()
  );
  year = year.replace(" - " + new Date(Date.now()).getFullYear(), "");
  let message;
  switch (database.value[path].license) {
    case "D":
      message = `Copyright ${year} ${database.value[path].author} <${database.value[path].email}>

Permission is hereby granted, free of charge, to any person getting access to
this content (the "Meme"), to deal with the Meme, including the rights to store
("download") and consume the Meme.

It it strictly prohibited to reupload ("repost") the Meme to any platform, to
sublicense the Meme, to resell the Meme and/or to modify the Meme.

THE MEME IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF CONSUMIBILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE MEME OR THE USE OR OTHER DEALINGS IN THE MEME.`;
      break;
    default:
      message = getLicense(database.value[path].license, {
        author:
          database.value[path].author +
          (database.value[path].pseudo
            ? ` (${database.value[path].pseudonym})`
            : ""),
        email: database.value[path].email,
        year: year
      });
      break;
  }
  return res.status(200).render("template", {
    message,
    iscc: database.value[path].license != "D",
    data: {
      author:
        database.value[path].author +
        (database.value[path].pseudo
          ? ` (${database.value[path].pseudonym})`
          : ""),
      email: database.value[path].email,
      year: year
    }
  });
});
//
/*// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});*/
module.exports=app

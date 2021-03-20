const express = require("express"),
  db = require("./db"),
  multer = require("multer"),
  path = require("path"),
  jwt = require("jsonwebtoken");

const app = express();
const PORT = 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

// set up file uploader
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// get Home page
app.get("/", (req, res) => {
  db.query("select * from news", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// file up
app.post("/fileup", upload.single("file-up"), (req, res) => {
  res.end();
});

// add new post
app.post("/", (req, res) => {
  db.query(
    `insert into news (title, Author, Content, views, tag, Date, path) values ('${req.body.title}', '${req.body.Author}', '${req.body.Content}', ${req.body.views}, '${req.body.tag}', '${req.body.Date}', '${req.protocol}://${req.hostname}:${PORT}/${req.body.fileName}')`
  );
  db.query("select * from news", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// update the views of post
app.put("/updateViews/:id", (req, res) => {
  db.query(
    `update news set views = ${req.body.views} where newsId = ${req.params.id}`,
    (err, rst) => {
      if (err) throw err;
      console.log(rst);
    }
  );
  db.query("select * from news", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// delete all the post
app.delete("/delete_all_news", (req, res) => {
  db.query("delete from news", (err, rst) => {
    if (err) throw err;
    console.log(rst);
    res.send(rst);
  });
});

// singup user
app.post("/signup", (req, res) => {
  const { userName, userPassword } = req.body;
  const User = { userName, userPassword };
  db.query("select * from users", (err, data) => {
    if (err) throw err;
    const user = data.find(function(user) {
      return user.userName === User.userName;
    });
    if (!user) {
      db.query(
        `insert into users (userName, userPassword) values ('${userName}', '${userPassword}')`
      );
      res.send({ userAdded: true });
    } else {
      res.send({ userAdded: false, msg: "user exist" });
    }
  });
});

// sing in page
app.post("/signin", (req, res) => {
  const User = {
    userName: req.body.userName,
    userPassword: req.body.userPassword
  };
  db.query("select * from users", (err, data) => {
    if (err) throw err;
    const check = data.find(user => user.userName === User.userName);
    if (check) {
      jwt.sign({ User }, "sowe changes");
      res.send({
        msg: `user ${User.userName} is singed in`,
        status: true
      });
    } else {
      res.send({ msg: "user not regestered", status: false });
    }
  });
});

app.listen(PORT, () => console.log("Server Runing"));

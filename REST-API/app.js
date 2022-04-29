const cors = require("cors");
const multer = require("multer");
const express = require("express");
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const uploadImg = multer({ storage: storage, fileFilter: fileFilter }).single("image");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public"));

app.post("/upload", uploadImg, (req, res) => {
  if (!req.file) {
    res.status(400).json({
      message: "Invalid file format",
    });
    return;
  }
  res.status(201).json({
    message: "Image saved",
  });
});

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

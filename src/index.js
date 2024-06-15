const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk mencatat setiap permintaan
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route untuk /hello
app.get("/hello", (req, res) => {
  res.json({
    message: "Success fetch message",
    data: "Hello World!",
  });
});

// Route untuk /user
app.get("/user", (req, res) => {
  res.json({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budidu",
      username: "budidu",
      email: "budidu@mail.com",
    },
  });
});

// Middleware untuk melayani file statis dari direktori public
app.use(express.static("public"));

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

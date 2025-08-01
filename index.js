const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/skills", (req, res) => {
  res.render("skills");
});
app.get("/resume", (req, res) => {
  res.render("resume");
});
app.get("/contact", (req, res) => {
  res.render("contact"); // ❌ Don't use success message anymore
});

// ❌ Remove or comment this if using FormSubmit
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.render("index");
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
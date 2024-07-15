const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", req.body); // Log received data

  const newContact = new Contact({ name, email, message });

  newContact.save()
    .then(() => {
      console.log("Data saved successfully");
      res.json({ status: "success" });
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.json({ status: "error", error: err });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// GET ROUTE
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
// PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
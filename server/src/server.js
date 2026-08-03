const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
   res.send("360 backend server is running...");
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
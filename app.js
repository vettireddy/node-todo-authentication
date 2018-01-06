const express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.listen(port, () => {
  console.log(`server started at port ${port}`);
})
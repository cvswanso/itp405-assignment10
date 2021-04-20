const express = require("express");
const axios = require("axios");

const app = express();

app.get("/dad-joke", (request, response) => {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((icanhazdadjokeResponse) => {
      response.json(icanhazdadjokeResponse.data);
    });
});

app.listen(8000);
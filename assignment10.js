const fs = require("fs");
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/github/:username", (request, response) => {
    const username = request.params.username;
    fs.readFile(`${username}.txt`, "utf8", (error, data) => {
        if (error)
        {
            axios.get(`https://api.github.com/users/${username}`)
            .then((githubResponse) => {
                const repoCount = githubResponse.data.public_repos;
                fs.writeFile(`${username}.txt`, repoCount.toString(), (error) => {
                    console.log("The file has been written to.");
                  });
                response.json({
                    repoCount: repoCount,
                });
            });
        }
        else
        {
            response.json({
                repoCount: Number(data),
            });
        }
      });
});

app.listen(8000);
const http = require("http");

export default async term => {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:6789/analyse/${term}`;

    console.log(url);
    http.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        console.log(body);
        body = JSON.parse(body);

        if (!body || body.status) {
          resolve(fakeData);
        }
        resolve(body);
      });
    });
  });
};

const fakeData = {
  poi: {
    name: "Sydney Cafes"
  },
  sentiment: 0.2291177597830938,
  starScore: 3
};

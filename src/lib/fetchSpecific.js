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

        if (!body) {
          reject();
        }
        resolve(body);
      });
    });
  });
};

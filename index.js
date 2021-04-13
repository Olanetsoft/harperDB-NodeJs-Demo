const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

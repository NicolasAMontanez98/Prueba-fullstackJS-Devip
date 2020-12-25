require("dotenv").config();
const app = require("./app");

async function main() {
  const port = app.get("port");
  await app.listen(port, () => {
    console.log(`Server run in port:${port}`);
  });
}

main();

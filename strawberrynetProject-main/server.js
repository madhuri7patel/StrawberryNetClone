const app = require("./src/index");
const connect = require("./src/configs/db");
app.listen(process.env.PORT || 4000, async function () {
  await connect();
  console.log("Listening on port 4000");
});

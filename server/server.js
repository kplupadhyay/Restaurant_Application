import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log("connected to server", process.env.PORT);
});

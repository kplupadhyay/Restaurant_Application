import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to databse");
    })
    .catch((e) => {
      console.log("error", e);
    });
};

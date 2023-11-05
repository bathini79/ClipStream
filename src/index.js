import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})
connectDB()

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("express error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on PORT: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("DB ERROR:", error);
//   }
// })();

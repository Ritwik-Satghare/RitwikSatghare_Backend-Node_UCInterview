import mongoose from "mongoose";
import express from "express";
import episodeRoute from "./routes/episodeRoute.js";
import watchedEpisodeRoute from "./routes/watchedEpisodeRoute.js";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World 1");
})

await mongoose.connect(
  "mongodb+srv://ritwik-satghare:E93eh1UIgHzkB9XA@friends0.bi25law.mongodb.net/friends"
);
console.log("App connected to DB");

app.use(express.json());

app.use("/api/watched-episodes", watchedEpisodeRoute);
app.use("/api", episodeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

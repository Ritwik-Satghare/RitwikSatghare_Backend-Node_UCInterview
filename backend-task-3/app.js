import mongoose from "mongoose";
import express from "express";
import { Episode } from "./models/episodeDB.js";

const app = express();
const port = 3000;

await mongoose.connect(
  "mongodb+srv://ritwik-satghare:E93eh1UIgHzkB9XA@friends0.bi25law.mongodb.net/test"
);
console.log("App connected to DB");

app.use(express.json());

app.get("/", (req, res) => {
  //hello world
  //Hello World
  res.send("Hello World!");
});

app.get("/api/episodes", async (req, res) => {
  // to get list of all the episodes
  try {
    const episodes = await Episode.find();
    res.status(200).json(episodes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to get the list of all the episodes" });
  }
});

app.get("/api/episode/:id", async (req, res) => {
  // to get a specific episode by id.
  try {
    const id = req.params.id;
    const episode = await Episode.findById(id);
    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }
    res.json(episode);
  } catch (error) {
    if (error.name == "CastError") {
      res.status(400).json({ message: "Invalid episode ID format" });
    }
    console.log(error);
    res.status(500).json({ message: "Failed to get the episode" });
  }
});

app.get("/api/seasons/:seasonNumber/episodes", async (req, res) => {
  // get all episodes of a season
  try {
    const episode = await Episode.find({
      season: req.params.seasonNumber,
    });
    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }
    res.json(episode);
  } catch (error) {
    if (error.name == "CastError") {
      res.status(400).json({ message: "Invalid episode ID format" });
    }
    console.log(error);
    res.status(500).json({ message: "Failed to get the episode" });
  }
});

app.get(
  "/api/seasons/:seasonNumber/episodes/:episodeNumber",
  async (req, res) => {
    // get a specific episode
    try {
      const episode = await Episode.find({
        season: req.params.seasonNumber,
        number: req.params.episodeNumber,
      });
      if (!episode) {
        return res.status(404).json({ message: "Episode not found" });
      }
      res.json(episode);
    } catch (error) {
      if (error.name == "CastError") {
        res.status(400).json({ message: "Invalid episode ID format" });
      }
      console.log(error);
      res.status(500).json({ message: "Failed to get the episode" });
    }
  }
);

app.post("/api/episodes", async (req, res) => {
  // add a new episode
  try {
    const episode = new Episode({
      name: req.body.name,
      season: req.body.season,
      number: req.body.number,
      airdate: req.body.airdate,
      rating: req.body.rating,
      summary: req.body.summary,
    });
    await episode.save();
    res.json(episode);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add the episode" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import mongoose from "mongoose";
import express from "express";
import { Episode } from "./models/episodeDB.js";

const app = express();
const port = 3000;

await mongoose.connect(
  "mongodb+srv://ritwik-satghare:E93eh1UIgHzkB9XA@friends0.bi25law.mongodb.net/friends"
);
console.log("App connected to DB");

app.use(express.json());

app.get("/", (req, res) => {
  //hello world
  res.status(200).send("Hello World!");
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
  // to get a specific episode by TVmaze id
  try {
    const id = req.params.id;
    const episode = await Episode.findOne({ id: id });
    if (episode.length === 0) {
      return res.status(404).json({ message: "Episode not found" });
    } else {
      res.status(200).json(episode);
    }
  } catch (error) {
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
    if (episode.length === 0) {
      return res.status(404).json({ message: "Episode not found" });
    } else {
      res.status(200).json(episode);
    }
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
      if (episode.length === 0) {
        return res.status(404).json({ message: "Episode not found" });
      } else {
        res.status(200).json(episode);
      }
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
    const episode = await Episode.create(req.body);
    res.status(200).json(episode);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating episode" });
  }
});

app.put("/api/episodes/:id", async (req, res) => {
  // update an episode fully
  // dont forget to put id in body
  const id = req.params.id;
  const updates = req.body;
  try {
    const result = await Episode.findOneAndUpdate(
      { id: id },
      { $set: updates },
      { new: true } // dont forget
    );
    if (!result) res.status(404).send("Episode not found");
    else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating episode");
  }
});

app.patch("/api/episodes/:id", async (req, res) => {
  // update an episode fully
  // dont forget to put id in body
  const id = req.params.id;
  const updates = req.body;
  try {
    const result = await Episode.findOneAndUpdate(
      { id: id },
      { $set: updates },
      { new: true }
    );
    if (!result) res.status(404).send("Episode not found");
    else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating episode");
  }
});

app.delete("/api/episodes/:id", async (req, res) => {
  // delete an episode
  const id = req.params.id;
  try {
    const result = await Episode.findOneAndDelete({ id: id });
    if (!result) res.status(404).send("Episode not found");
    else {
      res.status(200).json({ message: "Deleted Succesfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting episode");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

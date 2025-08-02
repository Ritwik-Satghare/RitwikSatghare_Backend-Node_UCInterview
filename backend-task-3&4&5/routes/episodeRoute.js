import express from "express";
import { Episode } from "../models/episodeDB.js";


const router = express.Router();


//Hello World
router.get("/", (req, res) => {
  res.status(200).send("Hello World 2");
});

// to get list of all the episodes
router.get("/episodes", async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.status(200).json(episodes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get the list of all the episodes" });
  }
});

// to get a specific episode by TVmaze id
router.get("/episode/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const episode = await Episode.findOne({ id: id });
    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    } else {
      res.status(200).json(episode);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get the episode" });
  }
});

// get all episodes of a season
router.get("/seasons/:seasonNumber/episodes", async (req, res) => {
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

// get a specific episode
router.get("/seasons/:seasonNumber/episodes/:episodeNumber", async (req, res) => {
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
});

// add a new episode
router.post("/episodes", async (req, res) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(200).json(episode);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating episode" });
  }
});

// update an episode fully
// dont forget to put id in body
router.put("/episodes/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const result = await Episode.findOneAndUpdate(
      { id: id },
      { $set: updates },
      { new: true }
    );
    if (!result) res.status(404).send("Episode not found");
    else res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating episode");
  }
});

// partially update an episode
router.patch("/episodes/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const result = await Episode.findOneAndUpdate(
      { id: id },
      { $set: updates },
      { new: true }
    );
    if (!result) res.status(404).send("Episode not found");
    else res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating episode");
  }
});

// delete an episode
router.delete("/episodes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Episode.findOneAndDelete({ id: id });
    if (!result) res.status(404).send("Episode not found");
    else res.status(200).json({ message: "Deleted Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting episode");
  }
});

export default router;

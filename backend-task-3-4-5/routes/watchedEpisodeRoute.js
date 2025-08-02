import express from "express";
import { watchedEpisode } from "../models/watchedEpisodeDB.js";
import e from "express";

const router = express.Router();

// log watched episode
router.post("/", async (req, res) => {
  try {
    const episode = await watchedEpisode.create(req.body);
    res.status(200).json(episode);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating episode" });
  }
});

// get all watched episodes
router.get("/", async (req, res) => {
  try {
    const episodes = await watchedEpisode.find();
    if (episodes.length === 0) {
      return res.status(404).json({ message: "No episodes found" });
    } else {
      res.status(200).json(episodes);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to get the list of all the episodes" });
  }
});

// to update the time of a logged episode
router.put("/:episodeNumber", async (req, res) => {
  const episodeNumber = req.params.episodeNumber;
  try {
    const result = await watchedEpisode.findOneAndUpdate(
      { episodeNumber: episodeNumber },
      { $set: { watchedAt: Date.now() } },
      { new: true }
    );
    if (!result) res.status(404).json({ message: "Episode not found" });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating episode" });
  }
});

// to delete a logged entry
router.delete("/:episodeNumber", async (req, res) => {
  const episodeNumber = req.params.episodeNumber;
  try {
    const result = await watchedEpisode.findOneAndDelete({
      episodeNumber: episodeNumber,
    });
    if (!result) res.status(404).json({ message: "Episode not found" });
    res.status(200).json({message: "Deleted Successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting episode" });
  }
});

export default router;

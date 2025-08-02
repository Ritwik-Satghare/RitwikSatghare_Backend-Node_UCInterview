import mongoose from "mongoose";

const watchedEpisodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  season: { type: Number, required: true },
  episodeNumber: { type: Number, required: true },
  userReview: String,
  watchedAt: { type: Date, default: Date.now },
});

export const watchedEpisode = mongoose.model(
  "watchedEpisode",
  watchedEpisodeSchema
);


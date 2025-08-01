import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
  name: String,
  season: Number,
  number: Number,
  airdate: String,
  rating: Number,
  summary: String, 
});

export const Episode = mongoose.model("Episode", episodeSchema);

import mongoose from "mongoose";
import { Episode } from "../models/episodeDB.js";

await mongoose.connect(
  "mongodb+srv://ritwik-satghare:E93eh1UIgHzkB9XA@friends0.bi25law.mongodb.net/friends"
);
console.log("Seed connected to DB");

const response = await fetch("https://api.tvmaze.com/shows/431/episodes");
const data = await response.json();

for (let i = 0; i < data.length; i++) {
  const episode = new Episode({
    id: data[i].id,
    name: data[i].name,
    season: data[i].season,
    number: data[i].number,
    airdate: data[i].airdate,
    rating: data[i].rating.average,
    summary: data[i].summary,
  });
  await episode.save();
}

await mongoose.connection.close();
console.log("Seeding completed successfully");
process.exit();

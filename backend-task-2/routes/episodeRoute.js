const express = require("express");
const router = express.Router();
const { getShowDetails } = require("../controllers/showController");
const {
  episodeDetails,
  filterEpisodeDetails,
} = require("../controllers/episodeController");

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("episode route called");
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/", async (req, res) => {
  try {
    const show = await getShowDetails();
    const episodes = await episodeDetails(show);
    const filtered = await filterEpisodeDetails(episodes);

    res.json(filtered);
  } catch (error) {
    console.log(`Error occurred: ${error}`);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;

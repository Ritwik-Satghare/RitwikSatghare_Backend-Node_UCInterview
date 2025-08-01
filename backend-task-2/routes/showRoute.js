const express = require("express");
const router = express.Router();
const {
  getShowDetails,
  presentShowDetails,
} = require("../controllers/showController");


const timeLog = (req, res, next) => {
  console.log("showRoute called");
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/", (req, res) => {
  getShowDetails()
    .then((data) => {
      res.json(presentShowDetails(data));
    })
    .catch((error) => {
      console.log(`error occured: ${error}`);
      res.status(500).send("Something went wrong");
    });
});

module.exports = router;

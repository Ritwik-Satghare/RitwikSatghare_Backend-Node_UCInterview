const { getShowDetails } = require("./showController");

// async function getShowId() {
//     const response = await fetch(
//         "https://api.tvmaze.com/singlesearch/shows?q=friends"
//     );
//     const data = await response.json();
//     return data.id;
// }
async function episodeDetails(res) {
  const id = res.id;
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    if (!response.ok) {
      if (response.status === 404) throw new Error("Show not found: 404");
      if (response.status === 500) throw new Error("Server error: 500");
      throw new Error(`Unexpected Error (${response.status})`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
async function filterEpisodeDetails(data) {

  const filteredData= data.map(episode => ({
      name: episode.name,
      season: episode.season,
      number: episode.number,
      airdate: episode.airdate,
      rating: episode.rating.average,
      image: episode.image.original,
      summary: episode.summary,
    
  }))

  return filteredData;
}

// getShowDetails()
//   .then((res) => episodeDetails(res))
//   .then((data) => filterEpisodeDetails(data))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(`${error}`));

  module.exports={episodeDetails, filterEpisodeDetails}

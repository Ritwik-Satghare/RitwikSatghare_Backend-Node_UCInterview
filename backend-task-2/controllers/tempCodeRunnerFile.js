getShowDetails()
  .then((res) => episodeDetails(res))
  .then((data) => filterEpisodeDetails(data))
  .then((result) => console.log(result))
  .catch((error) => console.log(`${error}`));
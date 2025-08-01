let id;
async function getShowDetails() {
  try {
    const response = await fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=friends"
    );
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

function presentShowDetails(data) {
  const {
    id,
    name,
    language,
    genres,
    averageRuntime,
    premiered,
    ended,
    rating,
    network,
    externals,
    image,
    summary,
  } = data;

  const filteredShowData = {
    id,
    name,
    language,
    genres,
    averageRuntime,
    premiered,
    ended,
    rating: rating.average,
    network: network.name,
    imdb: externals.imdb,
    image: image.original,
    summary,
  };

  return filteredShowData;
}

// getShowDetails()
//   .then((data) => {
//     console.log(presentShowDetails(data));
//   })
//   .catch((error) => console.log(`error occured: ${error}`));

module.exports = { getShowDetails, presentShowDetails };

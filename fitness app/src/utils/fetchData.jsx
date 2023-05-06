const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5aa4bb781dmsh53121c0ad7dfe64p1c75d2jsnb85806c57667",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5aa4bb781dmsh53121c0ad7dfe64p1c75d2jsnb85806c57667",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export { exerciseOptions, fetchData, youtubeOptions };

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkyMmU5NjQ2M2VlYTVjYWVkMTMwZDM3MzNiNzRmOSIsIm5iZiI6MTcyOTY5MjkyMC44NTc0NjMsInN1YiI6IjY3MThmODk4MjY4NWNiNjU2M2MwNzY3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A7KRSFu-jJP_-6FVGxZMjLjSUZXbsBOgEGRLWtnsRI";

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query,
    )}&language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );
  const data = await response.json();
  return data.results;
};

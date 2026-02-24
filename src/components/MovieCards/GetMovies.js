export async function GetMovies() {
  const apiKey = "c1dd558059f00aa2047bea1f27cdbd78";
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch movies");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

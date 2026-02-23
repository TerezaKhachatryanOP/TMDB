export async function filterKeyword(query) {
  const apiKey = "c1dd558059f00aa2047bea1f27cdbd78";
  const url = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=1`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch keyword");
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}

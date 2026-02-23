export async function FilterLanguage() {
  const apiKey = "c1dd558059f00aa2047bea1f27cdbd78";
  const url = `https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("failed to fetch languages");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

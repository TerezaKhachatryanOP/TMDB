export async function getCountries() {
  const apiKey = "c1dd558059f00aa2047bea1f27cdbd78";
  const url = `https://api.themoviedb.org/3/configuration/countries?language=en-US&api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch countries: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

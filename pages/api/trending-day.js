import { apiBase, apiKey } from "../../lib/tmdb";

export default async function handler( _req, res ) {
  const result = await fetch(
    `${apiBase}/trending/movie/day?api_key=${apiKey}&language=pt-BR`
  );
  const json = await result.json();

  res.status(200).json({
    list: json.results,
  });
}
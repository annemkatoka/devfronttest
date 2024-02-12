import { useState } from "react";
import MovieDetail from "../components/MovieDetail";
interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  imdbID: string;
}

export default function Detail() {
  console.log("Entra");
  const url = "https://www.omdbapi.com/";
  const apiKey = "15444734";

  const [movieData, setMovieData] = useState<Movie | null>(null);

  return (
    <>
      <MovieDetail />
    </>
  );
}

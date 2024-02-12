import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  imdbID: string;
}

export default function List() {
  const url = "https://www.omdbapi.com/";
  const apiKey = "15444734";

  const [titulo, setTitulo] = useState("");
  const [anho, setAnho] = useState("");
  const [movieData, setMovieData] = useState<Movie | null>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("titulo: ", titulo);
    console.log("anho: ", anho);
    e.preventDefault();
    axios
      .get(`${url}?t=${titulo}&y=${anho}&apikey=${apiKey}`)
      .then((response) => {
        const result = response.data;
        setMovieData(result);
        console.log("result", result);
      });
  };

  const handleTitleChange = (value: string) => {
    setTitulo(value);
  };

  const handleAnhoChange = (value: string) => {
    setAnho(value);
  };
  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        handleAnhoChange={handleAnhoChange}
        handleTitleChange={handleTitleChange}
      />
      <Link to={`/movie/${movieData?.imdbID}`}>
        <MovieCard
          imageSrc={movieData?.Poster || ""}
          title={movieData?.Title || ""}
          description={movieData?.Plot || ""}
          rate={movieData?.imdbRating || ""}
        />
      </Link>
    </>
  );
}

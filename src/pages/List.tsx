import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Layout/Spinner";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { Movie } from "../interfaces/Movie";

export default function List() {
  const url = "https://www.omdbapi.com/";
  const apiKey = "15444734";

  const [titulo, setTitulo] = useState("");
  const [anho, setAnho] = useState("");
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`${url}?t=${titulo}&y=${anho}&apikey=${apiKey}`)
      .then((response) => {
        const result = response.data;
        setMovieData(result);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  };

  const handleTitleChange = (value: string) => {
    setTitulo(value);
  };

  const handleAnhoChange = (value: string) => {
    setAnho(value);
  };
  return (
    <>
      <h1 className="text-center mt-4 mr-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
        Mentoría
      </h1>
      <SearchBar
        handleSubmit={handleSubmit}
        handleAnhoChange={handleAnhoChange}
        handleTitleChange={handleTitleChange}
      />
      {movieData && (
        <Link to={`/movie/${movieData?.imdbID}`}>
          <MovieCard
            imageSrc={movieData?.Poster || ""}
            title={movieData?.Title || ""}
            description={movieData?.Plot || ""}
            rate={movieData?.imdbRating || ""}
          />
        </Link>
      )}
      {loading && <Spinner />}
    </>
  );
}

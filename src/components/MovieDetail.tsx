import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  imdbID: string;
  Genre: string;
  Director: string;
  Actors: string;
}

export default function MovieDetail() {
  const { idMovie } = useParams();
  const url = "https://www.omdbapi.com/";
  const apiKey = "15444734";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFullMovie = () => {
    axios
      .get(`${url}?i=${idMovie}&plot=full&apikey=${apiKey}`)
      .then((response) => {
        const result = response.data;
        setMovieData(result);
        console.log("result", result);
      });
  };

  useEffect(() => {
    if (idMovie) {
      getFullMovie();
    }
  }, [getFullMovie, idMovie]);

  const [movieData, setMovieData] = useState<Movie | null>(null);
  return (
    <div className="flex justify-center items-center align-middle m-8">
      <div className="bg-white shadow-lg border-gray-100 h-full w-2/3 border rounded-3xl p-8 flex space-x-8">
        <img className="rounded-lg m-8" src={movieData?.Poster} alt="" />
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movieData?.Title}
            </h5>{" "}
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {" "}
              {movieData?.imdbRating}
            </div>
          </div>

          <div className="flex justify-between items-start mb-2">
            <div className="mb-2 text-xl font-curve tracking-tight text-gray-500 dark:text-white hover:font-bold">
              {movieData?.Director}
            </div>
          </div>

          <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
            {movieData?.Plot}
          </p>

          <div className="mt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Género
          </div>
          <div> {movieData?.Genre}</div>

          <div className="mt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actores
          </div>
          <div> {movieData?.Actors}</div>
        </div>
      </div>
    </div>
  );
}

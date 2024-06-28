import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import propTypes from "prop-types";

const KEY = "AIzaSyBzBRFCeqZd5IoGWNuatN5kI4oQBPcFxbo";

function Tubefree({ search }) {
  console.log("TUBEFREE RR");

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watch, setWatch] = useState("");

  useEffect(
    function () {
      if (search) getMovies(search);
    },
    [search],
  );

  async function getMovies(search) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&type=video&q=${search}&maxResults=30`,
      );
      if (!res.ok) throw Error("Res Is Not OK");
      const data = await res.json();
      setMovies(() => data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-[25%_75%]">
      {isLoading && <Loader />}
      <div className="bg-stone-400">
        {movies.length > 0 ? (
          <ul className="flex h-[500px] flex-col divide-y divide-stone-500 overflow-x-hidden overflow-y-scroll">
            {movies.map((movie, i) => (
              <li key={i} className="m-3">
                <h3 className="text-sm font-semibold">{movie.snippet.title}</h3>
                <div className="flex gap-1">
                  <img
                    className="cursor-pointer"
                    src={movie.snippet.thumbnails.default.url}
                    alt={movie.snippet.title}
                    onClick={() => setWatch(movie.id.videoId)}
                  />
                  <p className="text-xs">{movie.snippet.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
      <div className="bg-stone-500">
        <iframe
          title="MY VIDEO"
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${watch}`}
        ></iframe>
      </div>
    </div>
  );
}
Tubefree.propTypes = {
  search: propTypes.string,
};
export default Tubefree;

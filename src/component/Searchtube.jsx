import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";

function Searchtube({ setSearch }) {
  console.log("SEARCHTUBE RR");
  const [query, setQuery] = useState("");
  const inptEl = useRef(null);

  useEffect(function () {
    inptEl.current.focus();
  }, []);

  function handleClick() {
    setSearch(query);
    setQuery("");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        ref={inptEl}
        type="text"
        placeholder=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-md bg-red-100 px-2 py-1 text-sm ring transition-all duration-300 placeholder:text-red-400 focus:outline-none focus:ring-red-600 focus:ring-opacity-50 sm:w-64"
      />
      <button
        className="rounded-md bg-red-400 px-2 py-1 font-semibold text-red-700"
        onClick={handleClick}
      >
        GO
      </button>
    </form>
  );
}
Searchtube.propTypes = {
  setSearch: propTypes.func,
};

export default Searchtube;

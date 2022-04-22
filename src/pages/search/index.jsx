import SearchBar from "../../components/searchBar";
import Banner from "../../components/banner";
import "./index.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const currentSearch = useSelector((state) => state.search.value);

  useEffect(() => {
    setSearch(currentSearch);
    console.log(search);
  }, [useSelector]);

  const showTrack = search && <Banner />;

  return (
    <div className="right-content">
      <SearchBar />
      {showTrack}
    </div>
  );
}

export default Search;

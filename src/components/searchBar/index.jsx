import "./index.css";
import { useDispatch } from "react-redux";
import { searchGet } from "../../redux/searchSlice";
import { useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handelSearchTrack = (event) => {
    dispatch(searchGet(event.target.value));
    setText("");
  };

  const handleSearchOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <form
          onSubmit={(event) => {
            handelSearchTrack(event);
          }}
        >
          <input
            onChange={(e) => {
              handleSearchOnChange(e);
            }}
            value={text}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

function Playlist(props) {
  return (
    <div className="top">
      <h1>Create Playlist</h1>
      <form onSubmit={(event) => props.getPlaylist(event)}>
        <div>
          <p>Title</p>
          <input
            type="text"
            id="title-input"
            name="title"
            aria-label="title"
            onChange={(e) => {
              props.handleTitle(e);
            }}
            value={props.title}
          />
        </div>
        <div>
          <p>Description</p>
          <textarea
            id="description-input"
            name="description"
            aria-label="description"
            cols="30"
            rows="10"
            onChange={(e) => {
              props.handleDescription(e);
            }}
            value={props.description}
          ></textarea>
        </div>
        <button id="createButton" type="submit" aria-pressed="true">
          Create Playlist
        </button>
      </form>
    </div>
  );
}

export default Playlist;

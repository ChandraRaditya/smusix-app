function Playlist(props) {
    return (
        <div className="top">
            <h1>Create Playlist</h1>
            <form onSubmit={(event) => props.getPlaylist(event)}>
                <div>
                    <p>Title</p>
                    <input
                        type="text"
                        id="playlist-name"
                        name="title"
                        onChange={e => { props.handleTitle(e) }}
                        value={props.title}
                    />
                </div>
                <div>
                    <p>Description</p>
                    <textarea
                        id="playlist-description"
                        name="description"
                        cols="30"
                        rows="10"
                        onChange={e => { props.handleDescription(e) }}
                        value={props.description}
                    >
                    </textarea>
                </div>
                <button id="createButton" type='submit'>Create Playlist</button>
            </form>
        </div >
    )
}

export default Playlist;

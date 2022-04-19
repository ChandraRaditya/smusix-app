import { useState, useEffect } from "react";

export interface props {
  image: string;
  title: string;
  artist: string;
  uri: string;
  savedUri: (id: string, condition: boolean) => void;
  isUriExist: Array<string | number>;
}

function Track({ image, title, artist, uri, savedUri, isUriExist }: props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const checkedUri = isUriExist?.find((uris) => uris === uri);
    if (checkedUri) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [uri]);

  const handleSelectedButton = () => {
    if (isSelected) {
      setIsSelected(false);
      savedUri(uri, false);
    } else {
      setIsSelected(true);
      savedUri(uri, true);
    }
  };

  return (
    <div className="track-item">
      <img src={image} alt="" aria-label="album-image" />
      <p className="title" aria-label="track-title">
        {title}
      </p>
      <p className="artist" aria-label="track-artist">
        {artist}
      </p>
      <button aria-pressed="true" onClick={() => handleSelectedButton()}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </div>
  );
}

export default Track;

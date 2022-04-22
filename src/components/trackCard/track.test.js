import { render, screen } from "@testing-library/react";
import Track from "./index";

test("test track rendered", () => {
  render(<Track />);
  const image = screen.getByRole("img", { name: "album-image" });
  const trackTitle = screen.getByLabelText("track-title");
  const trackArtist = screen.getByLabelText("track-artist");
  const button = screen.getByRole("button", { pressed: true });

  expect(image).toBeInTheDocument();
  expect(trackTitle).toBeInTheDocument();
  expect(trackArtist).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

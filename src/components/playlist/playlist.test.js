import { render, screen } from "@testing-library/react";
import Playlist from "./index";

test("create playlist rendered", () => {
  render(<Playlist />);
  const title = screen.getByRole("textbox", { name: "title" });
  const description = screen.getByRole("textbox", { name: "description" });
  const button = screen.getByRole("button", { pressed: true });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Playlist from "./index";
import userEvent from "@testing-library/user-event";

test("create playlist rendered", () => {
  render(<Playlist />);
  const title = screen.getByRole("textbox", { name: "title" });
  const description = screen.getByRole("textbox", { name: "description" });
  const button = screen.getByRole("button", { pressed: true });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("simulate input in create playlist", async () => {
  render(<Playlist />);
  const title = screen.getByRole("textbox", { name: "title" });
  const description = screen.getByRole("textbox", { name: "description" });

  await userEvent.type(title, "playlisst number one");
  await userEvent.type(description, "test description");

  expect(title).toHaveValue("playlisst number one");
  expect(description).toHaveValue("test description");
});

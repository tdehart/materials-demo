import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Materials from "../";
import { materials } from "../../../utils/data";

describe("Materials Index page w/ no materials", () => {
  beforeEach(() => {
    const { debug } = render(<Materials materials={[]} title="Foo" />);
    // debug();
  });

  it("Should render title", () => {
    expect(screen.queryByText("Foo")).not.toBeNull();
  });

  it("Should render buttons", () => {
    expect(screen.queryByText("Add")).not.toBeNull();
    expect(screen.queryByText("Delete")).not.toBeNull();
  });

  it('Should render "No Materials" when materials is empty', () => {
    expect(screen.queryByText("No Materials")).not.toBeNull();
  });
});

describe("Materials Index page w/ materials", () => {
  beforeEach(() => {
    const { debug } = render(
      <Materials materials={materials} title="Materials" />
    );
    // debug();
  });

  it('Should NOT render "No Materials" when materials is non-empty', () => {
    expect(screen.queryByText("No Materials")).toBeNull();
  });

  it('Should render "$0.00" when no selected material', () => {
    expect(screen.queryByText("$0.00")).not.toBeNull();
  });

  it("Should show New Material when clicking add", () => {
    expect(screen.queryByText("New Material")).toBeNull();
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.queryByText("New Material")).not.toBeNull();
  });

  it("Should not show material after delete", () => {
    const firstMaterial = materials[0];
    expect(screen.queryByText(firstMaterial.name)).not.toBeNull();
    fireEvent.click(screen.getByText(firstMaterial.name));
    fireEvent.click(screen.getByText(/delete/i));
    expect(screen.queryByText(firstMaterial.name)).toBeNull();
  });

  it("Should render total when clicking on material", () => {
    const firstMaterial = materials[0];
    fireEvent.click(screen.getByText(firstMaterial.name));
    expect(
      screen.queryByText(`$${firstMaterial.cost * firstMaterial.volume}.00`)
    ).not.toBeNull();
  });
});

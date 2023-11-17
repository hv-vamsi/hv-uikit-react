import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HvTab } from "~/components";

describe("Tab", () => {
  it("should render correctly", () => {
    render(<HvTab label="Clickable tab" />);

    expect(
      screen.getByRole("tab", { name: "Clickable tab" })
    ).toBeInTheDocument();
  });
});

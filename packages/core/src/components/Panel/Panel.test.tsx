import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { HvTypography } from "~/components";

import { HvPanel } from "./Panel";

describe("Panel", () => {
  it("should render the Panel", async () => {
    render(
      <HvPanel>
        <HvTypography>Panel Content</HvTypography>
      </HvPanel>
    );
    const component = await screen.findAllByText("Panel Content");
    expect(component.length).toBe(1);
  });
});

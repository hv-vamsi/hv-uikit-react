import { baseTheme } from "./base";
import { toThemeVars } from "./utils";

export { variant as themeVariant } from "@styled-system/variant";

export const themeVars = toThemeVars({
  ...baseTheme,
  colors: { ...Object.values(baseTheme.colors.modes)[0] },
});

export * as hvThemes from "./themes";
export * from "./tokens";
export * from "./base";
export * from "./cssReset";

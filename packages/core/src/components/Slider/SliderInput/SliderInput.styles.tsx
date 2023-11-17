import { createClasses } from "~/utils/classes";

export const { staticClasses, useClasses } = createClasses("HvSliderInput", {
  inputRoot: { display: "flex" },
  input: { maxWidth: "50px" },
  inputContainer: { display: "flex" },
});

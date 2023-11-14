import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-react-core";

export const styles = {
  root: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  label: css({
    ...theme.typography.label,
  }),
  color: css({
    width: 20,
    height: 25,
    marginLeft: 5,
    padding: 0,
    backgroundColor: "transparent",
  }),
};

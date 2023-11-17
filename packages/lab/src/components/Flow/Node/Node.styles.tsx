import { createClasses, theme } from "@hitachivantara/uikit-react-core";

export const { staticClasses, useClasses } = createClasses("HvFlowNode", {
  subtitleContainer: {
    minHeight: 48,
    padding: theme.spacing(
      theme.space.xs,
      theme.space.xs,
      theme.space.xs,
      theme.space.sm
    ),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  paramsContainer: {
    borderTop: `1px solid ${theme.colors.atmo4}`,
    display: "flex",
    flexDirection: "column",
    gap: theme.space.xs,
    padding: theme.space.sm,
  },
});

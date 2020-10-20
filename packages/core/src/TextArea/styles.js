const styles = {
  root: {
    display: "inline-block",
    width: "100%",
  },
  resizable: {
    width: "auto",
  },
  disabled: {},
  invalid: {},

  baseInput: {},

  input: {},
  inputResizable: {
    resize: "auto",
    minWidth: "150px",
    maxWidth: "610px",
  },

  labelContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    display: "block",
    float: "left",
    paddingBottom: "6px",
  },
  description: {
    display: "block",
    float: "left",
  },
  characterCounter: {
    display: "block",
    float: "right",
    textAlign: "right",
    paddingBottom: "6px",
  },
};

export default styles;

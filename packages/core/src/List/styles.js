/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const selected = theme => ({
  background: theme.hv.palette.accent.acce1,
  color: theme.hv.palette.atmosphere.atmo1,
  "& *": {
    background: theme.hv.palette.accent.acce1,
    color: theme.hv.palette.atmosphere.atmo1
  }
});

const hover = theme => ({
  background: theme.hv.palette.atmosphere.atmo4,
  "& *": {
    background: theme.hv.palette.atmosphere.atmo4
  }
});

const styles = theme => ({
  root: {
    display: "block",
    padding: 0,
    margin: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "32px",
    listStyleType: "none",
    cursor: "pointer",
    "&:hover:not($selected)": hover(theme),
    "&:active:hover:not($selector)": selected(theme),
    "&:not(:last-child)": {
      marginBottom: "8px"
    },
    "& svg:last-child": {
      marginLeft: "auto"
    }
  },
  condensed: {
    marginBottom: "0 !important"
  },
  selector: {},
  selectorContainer: {
    width: "100%"
  },
  selected: selected(theme),
  selectAll: {
    "& > span": {
      ...theme.hv.typography.highlightText
    }
  },
  label: {
    padding: `0 ${theme.hv.spacing.xs}px`
  },
  labelIconLeftPadding: {
    paddingLeft: 0
  },
  noIconLeftPadding: {
    paddingLeft: `${theme.hv.spacing.md}px`
  },
  truncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

export default styles;

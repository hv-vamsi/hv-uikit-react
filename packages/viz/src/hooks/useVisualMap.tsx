import { useMemo } from "react";
import { VisualMapComponentOption } from "echarts";

import { HvChartLegend } from "../types";
import { HvEChartsOption } from "../types/common";
import { getLegendIcon } from "../utils";

export type HvVisualMapHookProps = VisualMapComponentOption & {
  show?: boolean;
  pieces?: Record<string, string | number>[];
  max?: number;
  min?: number;
  colorScale?: string[];
  type?: "continuous" | "piecewise";
  // Uses the same props as the legend
  position?: HvChartLegend["position"];
  direction?: HvChartLegend["direction"];
};

export const useVisualMap = ({
  show = true,
  direction = "horizontal",
  type = "continuous",
  pieces,
  max,
  min,
  colorScale,
  position: positionProp,
  ...others
}: HvVisualMapHookProps) => {
  const option = useMemo<Pick<HvEChartsOption, "visualMap">>(() => {
    return {
      visualMap: {
        type,
        show,
        ...(pieces && {
          pieces,
        }),
        ...(type === "piecewise" && {
          itemSymbol: getLegendIcon("square"),
          itemGap: 20,
          itemHeight: 16,
          itemWidth: 16,
        }),
        ...(colorScale && {
          max,
          min,
          inRange: {
            color: colorScale,
          },
        }),
        orient: direction,
        top: positionProp?.y || "top",
        left: positionProp?.x || "center",
        ...others,
      },
    };
  }, [
    colorScale,
    direction,
    max,
    min,
    others,

    pieces,
    positionProp?.x,
    positionProp?.y,
    show,
    type,
  ]);

  return option;
};

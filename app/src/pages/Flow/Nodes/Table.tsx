import { useMemo } from "react";
import {
  HvFlowNode,
  HvFlowNodeTypeMeta,
  HvFlowNodeProps,
  HvFlowNodeFC,
} from "@hitachivantara/uikit-react-lab";

export const Table: HvFlowNodeFC = (props) => {
  const params: HvFlowNodeProps["params"] = useMemo(() => {
    return [
      { label: "Title", id: "title", type: "text" },
      {
        label: "Territory",
        id: "measure",
        type: "select",
        options: ["APAC", "EMEA", "NA", "Japan"],
      },
    ];
  }, []);

  return (
    <HvFlowNode
      params={params}
      description="Table"
      expanded
      inputs={[
        {
          label: "Dataset",
          isMandatory: true,
          accepts: ["dataset"],
          maxConnections: 1,
        },
      ]}
      outputs={[
        {
          label: "Visualization",
          isMandatory: true,
          provides: "visualizations",
        },
      ]}
      {...props}
    />
  );
};

Table.meta = {
  label: "Table",
  groupId: "visualization",
  data: {
    title: "",
    columns: undefined,
    measure: "EMEA",
  },
} satisfies HvFlowNodeTypeMeta<NodeGroup>;

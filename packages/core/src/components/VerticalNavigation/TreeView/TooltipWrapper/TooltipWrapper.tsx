import { HvTooltip, HvTooltipPlacementType } from "~/components/Tooltip";
import { HvTypography } from "~/components/Typography";

interface TooltipWrapperProps {
  showTooltip: boolean;
  label: string;
  children: React.ReactElement;
  placement?: HvTooltipPlacementType;
}

export const TooltipWrapper = ({
  showTooltip,
  label,
  children,
  placement = "right",
}: TooltipWrapperProps) => {
  if (showTooltip) {
    return (
      <HvTooltip
        title={<HvTypography>{label}</HvTypography>}
        placement={placement}
      >
        {children}
      </HvTooltip>
    );
  }
  return children;
};

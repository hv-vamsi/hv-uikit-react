import { StyledTypography } from "./styles";

type TypographyVariants =
  | "display"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "body"
  | "label"
  | "caption1"
  | "caption2";

const TypographyMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
} as const;

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof typeof TypographyMap;
  variant?: TypographyVariants;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  as = "body",
  variant = "body",
}) => {
  const Component = TypographyMap[as];

  return (
    <StyledTypography as={Component} variant={variant}>
      {children}
    </StyledTypography>
  );
};

if (process.env.NODE_ENV !== "production") {
  Typography.displayName = "Typography";
}

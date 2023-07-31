import { cva, type VariantProps } from "class-variance-authority";

import { styles } from "./Button.styles";

const button = cva(styles.base, {
  variants: {
    /** Prop description */
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", className: styles.primaryMedium },
  ],
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> { }

export const Button = ({ className, intent, size, ...props }: ButtonProps) => (
  <button className={button({ intent, size, className })} {...props} />
);

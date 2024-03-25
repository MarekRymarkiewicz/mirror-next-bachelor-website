import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";

type TypographyVariants = "default" | "sectionHeader";

const useTypographyVariants = (variant: TypographyVariants) => {
  const definedVariants: { [T in TypographyVariants]: { className: string } } =
    {
      default: { className: "" },
      sectionHeader: {
        className: "text-2xl lg:text-3xl font-semibold mb-4 w-fit",
      },
    };
  return definedVariants[variant];
};

interface TypographyProps {
  variant?: TypographyVariants;
  className?: string;
  children?: ReactNode;
}

export const Typography: FunctionComponent<TypographyProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const classNames = clsx(
    "block",
    useTypographyVariants(variant).className,
    className
  );

  return (
    <span {...props} className={classNames}>
      {children}
    </span>
  );
};

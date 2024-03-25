import { ComponentProps, forwardRef } from "react";
import clsx from "clsx";

type InputVariants = "default" | "disabled";

const useInputVariants = (variant: InputVariants) => {
  const definedVariants: { [T in InputVariants]: { className: string } } = {
    default: { className: "border-inherit" },
    disabled: { className: "border-gray-400 text-gray-400 bg-gray-300" },
  };
  return definedVariants[variant];
};

interface InputProps extends ComponentProps<"input"> {
  variant?: InputVariants;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", disabled, className, ...props }, ref) => {
    const setVariant = (disabled ? "disabled" : variant) as InputVariants;
    const classNames = clsx(
      "py-2 px-4 sm:py-1.5 sm:px-3 border w-full rounded min-w-0 duration-75",
      useInputVariants(setVariant).className,
      className
    );

    return (
      <input {...props} className={classNames} disabled={disabled} ref={ref} />
    );
  }
);
Input.displayName = "Input";

import { ComponentProps, FunctionComponent, forwardRef } from "react";
import clsx from "clsx";

type ButtonVariants = "default" | "danger" | "ghost" | "disabled" | "inherit";

const useButtonVariants = (variant: ButtonVariants) => {
  const definedVariants: { [T in ButtonVariants]: { className: string } } = {
    default: {
      className: "bg-white text-black hover:bg-gray-300 active:bg-gray-400",
    },
    danger: {
      className: "bg-red-500 text-white hover:bg-red-400 active:bg-red-300",
    },
    ghost: {
      className:
        "bg-transparent text-inherit hover:bg-gray-500/30 active:bg-gray-500/40",
    },
    inherit: { className: "bg-inherit text-inherit" },
    disabled: { className: "bg-gray-400 text-gray-500 cursor-default" },
  };
  return definedVariants[variant];
};

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "default",
      type = "button",
      disabled,
      ...props
    },
    ref
  ) => {
    const setVariant = disabled ? "disabled" : variant;
    const classNames = clsx(
      "py-2 px-4 sm:py-1 sm:px-2 duration-75",
      useButtonVariants(setVariant).className,
      className
    );

    return (
      <button
        {...props}
        ref={ref}
        className={classNames}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

import clsx from "clsx";
import { ComponentProps, FunctionComponent } from "react";

interface ContainerProps extends ComponentProps<"div"> {
  wide?: boolean;
}

export const Container: FunctionComponent<ContainerProps> = ({
  wide,
  children,
  className,
  ...props
}) => {
  const classNames = clsx(
    "w-full lg:max-w-[1024px]] xl:max-w-[1280px] mx-auto",
    wide && "2xl:max-w-[1536px]",
    className
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

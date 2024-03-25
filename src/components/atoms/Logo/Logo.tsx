import { FunctionComponent } from "react";
import clsx from "clsx";

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = ({ ...props }) => {
  
  const classNames = clsx("")

  return <div {...props} className={classNames}></div>;
}

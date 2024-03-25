import { FunctionComponent } from "react";
import clsx from "clsx";

interface PersonCardProps {}

export const PersonCard: FunctionComponent<PersonCardProps> = ({ ...props }) => {
  
  const classNames = clsx("")

  return <div {...props} className={classNames}></div>;
}

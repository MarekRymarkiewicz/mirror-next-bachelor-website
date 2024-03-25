import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";

interface FooterCardProps {
  title: ReactNode;
  children?: ReactNode;
}

export const FooterCard: FunctionComponent<FooterCardProps> = ({
  title,
  children,
}) => {
  return (
    <div className="">
      <div className="mb-4 text-xl font-semibold">{title}</div>
      <div className="">{children}</div>
    </div>
  );
};

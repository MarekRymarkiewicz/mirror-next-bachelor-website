import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";

interface TrailedLogProps {
  date: Date;
  children?: ReactNode;
}

export const TrailedLog: FunctionComponent<TrailedLogProps> = ({
  date,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-row place-items-center relative py-4 gap-4 first:pt-0 last:pb-0 after:absolute after:w-[1px] after:border-x after:border-inherit after:left-3 after:bottom-0 after:top-0 first:after:top-1/2 last:after:bottom-1/2 after:-translate-x-1/2">
      <div className="col-span-2 p-2.5 bg-white border-2 border-inherit rounded-full z-[2] "></div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

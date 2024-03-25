import { FunctionComponent, ReactNode } from "react";
import clsx from "clsx";

interface TitledListProps {
  title: ReactNode;
  listElements: ReactNode[];
}

export const TitledList: FunctionComponent<TitledListProps> = ({
  title,
  listElements,
}) => {
  return (
    <div>
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="list-disc pl-6">
        {listElements.map((element, index) => (
          <li key={index} className="my-1">
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

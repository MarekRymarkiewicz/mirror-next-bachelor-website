"use client";
import { FunctionComponent, ReactNode, useState } from "react";
import clsx from "clsx";
import TrailedLog from "@/components/molecules/TrailedLog";
import Button from "@/components/atoms/Button";

interface DonationHistoryProps {
  entries: { date: Date; entry: ReactNode }[];
}

export const DonationHistory: FunctionComponent<DonationHistoryProps> = ({
  entries,
}) => {
  const [isExtended, setIsExtended] = useState(false);
  if (entries.length <= 6 || isExtended) {
    return (
      <div className="py-6">
        {entries.map((entry, index) => (
          <TrailedLog key={index}>
            <b className="font-semibold">
              {entry.date.toLocaleDateString("pl-pl")}
            </b>{" "}
            - {entry.entry}
          </TrailedLog>
        ))}
      </div>
    );
  }
  const prepend = entries.slice(0, 3);
  const append = entries.slice(-3);
  return (
    <div className="py-6">
      {prepend.map((entry, index) => (
        <TrailedLog key={index}>
          <b className="font-semibold">
            {entry.date.toLocaleDateString("pl-pl")}
          </b>{" "}
          - {entry.entry}
        </TrailedLog>
      ))}
      <div>
        <div className="flex flex-col gap-1 pl-3 py-1">
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
        </div>
        <div className="flex flex-col place-items-center sm:place-items-start">
          <Button
            onClick={() => {
              setIsExtended(true);
            }}
            className="border rounded w-fit"
          >
            Rozwiń listę
          </Button>
        </div>
        <div className="flex flex-col gap-1 pl-3 py-1">
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
          <div className="p-[1px] bg-gray-300 w-fit rounded-full"></div>
        </div>
      </div>
      {append.map((entry, index) => (
        <TrailedLog key={index}>
          <b className="font-semibold">
            {entry.date.toLocaleDateString("pl-PL")}
          </b>{" "}
          - {entry.entry}
        </TrailedLog>
      ))}
    </div>
  );
};

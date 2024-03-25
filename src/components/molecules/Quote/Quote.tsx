import { FunctionComponent, ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface QuoteProps {
  author: {
    image: { staticImageData: StaticImageData; altText: string };
    fullName: string;
    position: string;
  };
  quote: ReactNode;
}

export const Quote: FunctionComponent<QuoteProps> = ({ author, quote }) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row rounded-xl border-2 border-gray-200 md:mx-4 lg:mx-6 max-w-5xl">
      <div className="flex flex-row sm:flex-col place-items-center gap-4 p-4">
        <Image
          src={author.image.staticImageData}
          alt={author.image.altText}
          title={author.image.altText}
          width={96}
          height={96}
          className="bg-slate-300 rounded-xl"
        ></Image>
        <div>
          <div className="text-xl text-nowrap mb-2">{author.fullName}</div>
          <div className="text-sm">{author.position}</div>
        </div>
      </div>
      <blockquote
        cite="https://www.wosp.org.pl/fundacja/wazne"
        className="italic bg-gray-100 p-4 h-fit indent-4 block"
      >
        {quote}
      </blockquote>
    </div>
  );
};

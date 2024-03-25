"use client";
import { FunctionComponent } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

interface NewsletterProps {}

export const Newsletter: FunctionComponent<NewsletterProps> = ({}) => {
  return (
    <form className="border-white sm:rounded-lg bg-slate-800 text-white sm:max-w-lg overflow-hidden shadow-md">
      <div className="p-4">
        <label htmlFor="newsletterInput" className="block mb-2 text-lg">
          Zapisz się do biuletynu!*
        </label>
        <hr className="mb-4" />
        <label htmlFor="newsletterInput">Adres email:</label>
        <Input
          id="newsletterInput"
          className="mb-4 text-black"
          placeholder="nazwa@domena.pl"
          type="email"
        />
        <div className="flex flex-row justify-end gap-4">
          <Button type="reset" variant="ghost">
            <span className="underline">Reset</span>
          </Button>
          <Button type="reset">Wyślij</Button>
        </div>
      </div>
      <div className="p-4 text-xs bg-slate-900">
        *formularz pełni wyłącznie funkcję prezentacyjną, nie wykonywane są
        żadne zapytania i dane nie są nigdzie przesyłane.
      </div>
    </form>
  );
};

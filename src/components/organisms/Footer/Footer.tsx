import { FunctionComponent } from "react";
import clsx from "clsx";
import FooterCard from "@/components/molecules/FooterCard";
import Container from "@/components/atoms/Container";
import Link from "next/link";

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 md:py-12">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        <FooterCard title="Informacja o stronie">
          <p className="mb-4">
            Powyższa strona powstała w celach edukacyjnych na potrzeby pracy
            inżynierskiej.
          </p>
          <p>
            W przypadku uwag dotyczących treści w niej zawartej uprzejmie proszę
            o kontakt.
          </p>
        </FooterCard>
        <FooterCard title="Źródła">
          Wszelkie treści pochodzą z oficjalnej strony{" "}
          <Link
            className="text-blue-300 visited:text-blue-400 underline"
            href={"https://www.wosp.org.pl"}
          >
            WOŚP
          </Link>{" "}
          oraz poświęconej fundacji strony{" "}
          <Link
            className="text-blue-300 visited:text-blue-400 underline"
            href={
              "https://pl.wikipedia.org/wiki/Wielka_Orkiestra_%C5%9Awi%C4%85tecznej_Pomocy"
            }
          >
            Wikipedia
          </Link>
          .
        </FooterCard>
        <FooterCard title="Kontakt">
          <address className="not-italic">
            <ul>
              <li>
                email:{" "}
                <a
                  href="mailto:m.rymarkiewicz@op.pl"
                  className="text-blue-300 visited:text-blue-400 underline"
                >
                  m.rymarkiewicz@op.pl
                </a>
              </li>
              <li>
                Repozytorium:{" "}
                <Link
                  href={
                    "https://github.com/MarekRymarkiewicz/mirror-next-bachelor-website"
                  }
                  className="text-blue-300 visited:text-blue-400 underline"
                >
                  mirror-next-bachelor-website
                </Link>
              </li>
            </ul>
          </address>
        </FooterCard>
        <FooterCard title="Mapa strony">
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <Link
                className="text-blue-300 visited:text-blue-400 underline py-1 block w-fit"
                href={"#about"}
              >
                O WOŚP
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-300 visited:text-blue-400 underline py-1 block w-fit"
                href={"#achievements"}
              >
                Osiągnięcia
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-300 visited:text-blue-400 underline py-1 block w-fit"
                href={"#history"}
              >
                Historia
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-300 visited:text-blue-400 underline py-1 block w-fit"
                href={"#contact"}
              >
                Kontakt z fundacją
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-300 visited:text-blue-400 underline py-1 block w-fit"
                href={"#newsletter"}
              >
                Biuletyn informacyjny
              </Link>
            </li>
          </ul>
        </FooterCard>
      </Container>
    </footer>
  );
};

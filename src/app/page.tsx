import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Input from "@/components/atoms/Input";
import Quote from "@/components/molecules/Quote";
import Footer from "@/components/organisms/Footer";
import Newsletter from "@/components/organisms/Newsletter";
import Image from "next/image";
import jerzyowsiakimage from "@/assets/jerzy-owsiak-fot-Łukasz-Widziszowski.jpg";
import wospMainImage from "@/assets/wosp-fot-Łukasz-Widziszowski.jpg";
import aboutImage from "@/assets/about-fot-Barbara-Krasuska.webp";
import Link from "next/link";
import TitledList from "@/components/molecules/TitledList";
import Typography from "@/components/atoms/Typography";
import TrailedLog from "@/components/molecules/TrailedLog";
import DonationHistory from "@/components/organisms/DonationHistory";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div id="about">
          <div className="bg-white">
            <Container className="bg-white">
              <div className="h-[50vh] relative">
                <Image
                  src={wospMainImage}
                  alt="31 Finał WOŚP, fot. Paweł Krupka"
                  width={0}
                  height={0}
                  priority
                  id="mainImage"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className=""
                />
                <h1 className="text-2xl lg:text-3xl font-bold absolute bottom-[15%] left-0 max-w-xl  bg-black/80 text-white p-8">
                  Fundacja Wielka Orkiestra Świątecznej Pomocy
                </h1>
                <span className="absolute bottom-0 right-0 bg-black/50 text-white text-sm py-1 px-2">
                  fot. Łukasz Widziszowski
                </span>
              </div>
            </Container>
          </div>
          <div className="bg-cyan-300 max-xl:pl-1 pb-1">
            <Container className="pt-4 px-4 lg:px-8 pb-12 bg-white border-b-2">
              <Typography variant="sectionHeader">
                O Wielkiej Orkiestrze Świątecznej Pomocy
              </Typography>
              <div className="">
                <p className="mb-6 float-none text-justify">
                  Jest to fundacja o charakterze filantropijnym, której
                  podstawowym celem według statutu jest: „działalność w zakresie
                  ochrony zdrowia polegająca na ratowaniu życia chorych osób, w
                  szczególności dzieci, i działanie na rzecz poprawy stanu ich
                  zdrowia, jak również na działaniu na rzecz promocji zdrowia i
                  profilaktyki zdrowotnej”.
                </p>
                <div className="w-full sm:w-[320px] md:w-[420px] lg:w-[520px] float-right relative mb-6 sm:mx-4">
                  <Image
                    src={aboutImage}
                    alt="Granie na finale WOŚP, fot. Barbara Krasuska"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="px-2"
                  />
                  <span className="absolute bottom-0 right-0 bg-black/50 text-white text-sm py-1 px-2 mr-2">
                    fot. Barbara Krasuska
                  </span>
                </div>

                <p className="mb-6 float-none text-justify">
                  Jest to fundacja o charakterze filantropijnym, której
                  podstawowym celem według statutu jest: „działalność w zakresie
                  ochrony zdrowia polegająca na ratowaniu życia chorych osób, w
                  szczególności dzieci, i działanie na rzecz poprawy stanu ich
                  zdrowia, jak również na działaniu na rzecz promocji zdrowia i
                  profilaktyki zdrowotnej”.
                </p>
                <p className="mb-6 float-none text-justify">
                  Oprócz zakupów sprzętu medycznego i wyposażenia placówek
                  ochrony zdrowia fundacja zainicjowała, finansuje oraz wspomaga
                  prowadzenie siedmiu ogólnopolskich programów i akcji
                  medycznych i jednej inicjatywy edukacyjnej
                </p>
                <p className="mb-6 float-none text-justify">
                  Najbardziej znaną formą działalności fundacji jest coroczna,
                  ogólnopolska impreza rozrywkowo-medialna o charakterze
                  charytatywnym, nazwana Finałem Wielkiej Orkiestry Świątecznej
                  Pomocy. Każdy Finał WOŚP ma określony temat - czyli cel
                  medyczny, na który przeznaczone zostaną zebrane podczas Finału
                  pieniądze oraz hasło, które promuje i wyjaśnia medyczny cel
                  zbiórki. Zarząd fundacji, w którego skład wchodzą Jerzy Owsiak
                  (prezes zarządu), Lidia Niedźwiedzka-Owsiak (dyrektorka do
                  spraw medycznych fundacji), oraz lekarze: prof. dr hab. n.
                  med. Bohdan Maruszewski (obecnie wiceprezes zarządu) i prof.
                  dr hab. n. med. Piotr Burczyński, podejmują decyzję dotyczącą
                  celu medycznego zbiórki po konsultacjach z ekspertami,
                  konsultantami krajowymi i na podstawie próśb otrzymywanych od
                  placówek medycznych w całym kraju.
                </p>
              </div>
            </Container>
          </div>
        </div>

        <div id="achievements" className="bg-cyan-500 max-xl:pl-1 pb-1">
          <Container className="pt-4 px-4 lg:px-8 pb-12 bg-white border-b-2">
            <Typography variant="sectionHeader">Osiągnięcia</Typography>W ciągu
            30 Finałów WOŚP zebrano ponad{" "}
            <b className="font-bold">1,755 miliarda złotych</b>. WOŚP kupiła i
            przekazała ponad <b className="font-bold">70 400 urządzeń</b> do
            placówek ochrony zdrowia w całej Polsce. W 2020 roku szacowało się,
            że co piąty sprzęt w szpitalach pochodzi od Wielkiej Orkiestry
            Świątecznej Pomocy. Według badań opinii publicznej fundacja od lat
            cieszy się największym zaufaniem wśród organizacji trzeciego
            sektora, instytucji państwowych i kościelnych.
            <h1 className="text-lg my-2 font-semibold">Wyniki finałów WOŚP:</h1>
            <DonationHistory
              entries={[
                {
                  date: new Date("1993-01-03"),
                  entry: "Choroby serca - 2 422 465 PLN",
                },
                {
                  date: new Date("1994-01-02"),
                  entry: "Pomoc szpitalom noworodkowym - 4 134 073 PLN",
                },
                {
                  date: new Date("1995-01-08"),
                  entry:
                    "Zakup sprzętu dla klinik onkologicznych - 6 867 951 PLN",
                },
                {
                  date: new Date("1996-01-07"),
                  entry:
                    "Ratowanie życia dzieci, które uległy wypadkom - 6 315 296 PLN",
                },
                {
                  date: new Date("1997-01-05"),
                  entry: "Ratowanie dzieci z chorobami serca - 8 818 754 PLN",
                },
                {
                  date: new Date("1998-01-04"),
                  entry:
                    "Ratowanie życia dzieci poszkodowanych w wypadkach - 12 498 909 PLN",
                },
                {
                  date: new Date("1999-01-10"),
                  entry: "Ratowanie życia noworodków - 15 748 393 PLN",
                },
                {
                  date: new Date("2000-01-09"),
                  entry:
                    "Ratowanie życia dzieci z chorobami nerek - 25 229 564 PLN",
                },
                {
                  date: new Date("2001-01-07"),
                  entry: "Diagnostyka noworodków i niemowląt - 24 366 828 PLN",
                },
                {
                  date: new Date("2002-01-13"),
                  entry:
                    "Ratowanie życia dzieci z wadami wrodzonymi - 26 291 937 PLN",
                },
                {
                  date: new Date("2003-01-12"),
                  entry:
                    "Zakup sprzętu medycznego dla oddziałów niemowlęcych i dzieci młodszych - 30 116 786 PLN",
                },
                {
                  date: new Date("2004-01-11"),
                  entry:
                    "Zakup sprzętu medycznego dla oddziałów niemowlęcych i dzieci młodszych - 27 244 441 PLN",
                },
                {
                  date: new Date("2005-01-09"),
                  entry:
                    "Nowoczesne metody diagnostyki i leczenia w neonatologii i pediatrii - 28 415 177 PLN",
                },
                {
                  date: new Date("2006-01-08"),
                  entry:
                    "Ratowanie życia dzieci poszkodowanych w wypadkach i nauka pierwszej pomocy - 30 690 085 PLN",
                },
                {
                  date: new Date("2007-01-14"),
                  entry:
                    "Ratowanie życia dzieci poszkodowanych w wypadkach i nauka pierwszej pomocy - 30 377 335 PLN",
                },
                {
                  date: new Date("2008-01-13"),
                  entry:
                    "Pomoc dzieciom ze schorzeniami laryngologicznymi - 32 147 539 PLN",
                },
                {
                  date: new Date("2009-01-11"),
                  entry:
                    "Wczesne wykrywanie nowotworów u dzieci - 40 458 625 PLN",
                },
                {
                  date: new Date("2010-01-10"),
                  entry:
                    "Wczesne wykrywanie nowotworów u dzieci - 42 877 958 PLN",
                },
                {
                  date: new Date("2011-01-09"),
                  entry:
                    "Na zakup sprzętu dla dzieci z chorobami urologicznymi i nefrologicznymi - 47 248 415 PLN",
                },
                {
                  date: new Date("2012-01-08"),
                  entry:
                    "Zakup sprzętu urządzeń do ratowania życia wcześniaków oraz pomp insulinowych - 50 638 801 PLN",
                },
                {
                  date: new Date("2013-01-13"),
                  entry:
                    "Ratowanie życia dzieci i godna opieka medyczna seniorów - 50 657 748 PLN",
                },
                {
                  date: new Date("2014-01-12"),
                  entry:
                    "Na zakup specjalistycznego sprzętu dla dziecięcej medycyny ratunkowej i godna opieka medyczna seniorów - 52 448 765 PLN",
                },
                {
                  date: new Date("2015-01-11"),
                  entry:
                    "Podtrzymanie wysokich standardów leczenia dzieci na oddziałach pediatrycznych i onkologicznych oraz godna opieka medyczna seniorów - 53 109 703 PLN",
                },
                {
                  date: new Date("2016-01-10"),
                  entry:
                    "Na zakup urządzeń medycznych dla oddziałów pediatrycznych oraz dla zapewnienia godnej opieki medycznej seniorów - 72 696 502 PLN",
                },
                {
                  date: new Date("2017-01-15"),
                  entry:
                    "Ratowanie życia i zdrowia dzieci na oddziałach ogólnopediatrycznych oraz zapewnienie godnej opieki medycznej seniorom - 105 570 801 PLN",
                },
                {
                  date: new Date("2018-01-14"),
                  entry:
                    "Dla wyrównywania szans w leczeniu noworodków - 126 373 804 PLN",
                },
                {
                  date: new Date("2019-01-13"),
                  entry:
                    "Na zakup nowoczesnego sprzętu medycznego dla specjalistycznych szpitali dziecięcych - 175 938 717 PLN",
                },
                {
                  date: new Date("2020-01-12"),
                  entry: "Dla dziecięcej medycyny zabiegowej - 186 133 611 PLN",
                },
                {
                  date: new Date("2021-01-31"),
                  entry:
                    "Laryngologia, otolaryngologia i diagnostyka głowy - 210 813 830 PLN",
                },
                {
                  date: new Date("2022-01-30"),
                  entry: "Okulistyka dziecięca - 224 376 706 PLN",
                },
                {
                  date: new Date("2023-01-28"),
                  entry:
                    "Chcemy wygrać z sepsą! Gramy dla wszystkich - małych i dużych! - 243 259 387 PLN",
                },
              ]}
            />
          </Container>
        </div>
        <div id="history" className="bg-sky-500 max-xl:pl-1 pb-1">
          <Container className="pt-4 px-4 lg:px-8 pb-12 bg-white border-b-2">
            <Typography variant="sectionHeader">Historia fundacji</Typography>
            <p className="mb-6 text-justify">
              Akcja została zapoczątkowana przez Brum, copiątkową audycję
              Jerzego Owsiaka w Programie III Polskiego Radia - spontaniczne
              datki przesyłane w kopertach i przekazami trafiły na rzecz dzieci
              z wrodzonymi wadami serca.
            </p>
            <p className="mb-6 text-justify">
              Nazwa{" "}
              <i className="italic">Wielka Orkiestra Świątecznej Pomocy</i> po
              raz pierwszy została użyta w programie telewizyjnym{" "}
              <i className="italic">
                Róbta co chceta, czyli rock&apos;n&apos;rollowa jazda bez
                trzymanki
              </i>
              , w ferie bożonarodzeniowe 1991 roku. Sama fundacja została
              zarejestrowana w Warszawie 2 marca 1993 roku, a jej założycielami
              są Jerzy Owsiak, Lidia Niedźwiedzka-Owsiak, Bohdan Maruszewski,
              Piotr Burczyński, Paweł Januszewicz, Walter Chełstowski, Beata
              Bethke.
            </p>
            <p className="mb-6 text-justify">
              Dopiero po pierwszym Finale, który miał miejsce 3 stycznia 1993
              roku, WOŚP została zarejestrowana w sądzie
            </p>
            <div className="w-full place-items-center flex flex-col mb-6">
              <Quote
                author={{
                  fullName: "Jerzy Owsiak",
                  image: {
                    staticImageData: jerzyowsiakimage,
                    altText: "Jerzy Owsiak, fot. Łukasz Widziszowski",
                  },
                  position: "Współzałożyciel i prezes zarządu fundacji",
                }}
                quote={
                  <>
                    <p className="mb-4 text-justify">
                      Wcześniej w ogóle nie myśleliśmy o tym, żeby zakładać
                      Fundację, a pierwsza zbiórka pieniędzy była organizowana w
                      oparciu o potrzeby kardiochirurgii dziecięcej Centrum
                      Zdrowia Dziecka w Warszawie. To właśnie tam istniała
                      fundacja, która już od pewnego czasu zbierała pieniądze na
                      zakup specjalistycznego sprzętu medycznego.
                    </p>
                    <p className="text-justify">
                      Kiedy ogłosiliśmy w telewizyjnym programie Róbta co chceta
                      zaproszenie do pierwszego Finału, myśleliśmy o
                      jednorazowym happeningu i wielkiej zabawie, która miała
                      przynieść wymierne korzyści. Ale jakie? Tego nikt nawet
                      nie przewidywał. Sukces pierwszego Finału pozwolił na
                      podział zebranych pieniędzy pomiędzy wszystkie ośrodki
                      kardiochirurgii dziecięcej w Polsce. Tym samym akcja
                      nabrała znaczenia ogólnopolskiego, a nasze pierwsze zakupy
                      w sposób istotny wpłynęły na poprawę pracy polskich
                      kardiochirurgów dziecięcych.
                    </p>
                  </>
                }
              />
            </div>
            <p className="text-justify">
              Sukces Pierwszego Finału spowodował, że postanowiono powołać do
              życia Fundację, która podjęłaby się zorganizowania następnego
              Finału.
            </p>
          </Container>
        </div>
        <div id="contact" className="bg-blue-500 max-xl:pl-1 pb-1">
          {/* <Container className="p-6 bg-slate-800 text-white"> */}
          <Container className="pt-4 px-4 lg:px-8 pb-12 bg-white border-b-2">
            <Typography variant="sectionHeader">Kontakt</Typography>
            <span className="xl:text-lg">
              Aby skontaktować się z fundacją można skorzystać z następujących
              metod.
            </span>
            <hr className="mt-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="bg-slate-100 md:rounded-xl p-4 sm:col-span-2 md:col-span-1">
                <h1 className="text-lg mb-2 font-semibold">Adres fundacji:</h1>
                <div>
                  Fundacja Wielka&nbsp;Orkiestra&nbsp;Świątecznej&nbsp;Pomocy
                </div>
                <div>ul. Dominikańska 19c, 02-738 Warszawa</div>
                <div className="flex flex-row gap-2">
                  Tel:
                  <ul>
                    <li>+48 22 852 32 14</li>
                    <li>+48 22 852 32 15</li>
                  </ul>
                </div>
                <div>
                  Czynne: poniedziałek-piątek,
                  w&nbsp;godz.&nbsp;8.15&#8209;16.15
                </div>
              </div>
              <div className="bg-slate-100 md:rounded-xl p-4 flex flex-col gap-4">
                <h1 className="text-lg font-semibold">Kontakt mailowy:</h1>
                <TitledList
                  title="Medycyna"
                  listElements={[
                    <a
                      key={"medycyna-1"}
                      href="mailto:medyczny@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      medyczny@wosp.org.pl
                    </a>,
                    <a
                      key={"medycyna-2"}
                      href="mailto:cukrzyca@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      cukrzyca@wosp.org.pl
                    </a>,
                    <a
                      key={"medycyna-3"}
                      href="mailto:pomoc@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      pomoc@wosp.org.pl
                    </a>,
                    <a
                      key={"medycyna-4"}
                      href="mailto:słuch@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      słuch@wosp.org.pl
                    </a>,
                  ]}
                />
                <TitledList
                  title="Marketing"
                  listElements={[
                    <a
                      key={"marketing-1"}
                      href="mailto:redakcja@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      redakcja@wosp.org.pl
                    </a>,
                    <a
                      key={"marketing-2"}
                      href="mailto:rzecznik@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      rzecznik@wosp.org.pl
                    </a>,
                    <a
                      key={"marketing-3"}
                      href="mailto:media@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      media@wosp.org.pl
                    </a>,
                    <a
                      key={"marketing-4"}
                      href="mailto:marketing@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      marketing@wosp.org.pl
                    </a>,
                  ]}
                />
                <TitledList
                  title="Pierwsza pomoc i szkolenia"
                  listElements={[
                    <a
                      key={"szkolenia-1"}
                      href="mailto:uczymyratowac@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      uczymyratowac@wosp.org.pl
                    </a>,
                    <a
                      key={"szkolenia-2"}
                      href="mailto:patrol@wosp.org.pl"
                      className="text-blue-600 visited:text-blue-800 underline"
                    >
                      patrol@wosp.org.pl
                    </a>,
                  ]}
                />
              </div>
              <div className="bg-slate-100 md:rounded-xl p-4">
                <div>
                  <h1 className="text-lg mb-2 font-semibold">
                    Strony internetowe fundacji:
                  </h1>
                </div>
                <div>
                  <ul className="list-disc pl-6">
                    <li className="my-1">
                      <Link
                        className="text-blue-600 visited:text-blue-800 underline"
                        href={"https://polandrockfestival.pl/"}
                      >
                        polandrockfestival.pl
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link
                        className="text-blue-600 visited:text-blue-800 underline"
                        href={"https://kreciola.tv/"}
                      >
                        kreciola.tv
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link
                        className="text-blue-600 visited:text-blue-800 underline"
                        href={"https://siemashop.pl/"}
                      >
                        siemashop.pl
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link
                        className="text-blue-600 visited:text-blue-800 underline"
                        href={"https://szadowomlyn.pl/"}
                      >
                        szadowomlyn.pl
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link
                        className="text-blue-600 visited:text-blue-800 underline"
                        href={"https://zlotymelon.pl/"}
                      >
                        zlotymelon.pl
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div id="newsletter" className="bg-indigo-500">
          <Container className="flex justify-center py-32">
            <Newsletter />
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";

const checkIcon = (
  <svg
    className="mr-2 flex-shrink-0 text-blue-500"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const infoDesign = {
  heading: "Nowoczesny design stron internetowych",
  description:
    "Profesjonalny design strony internetowej to klucz do sukcesu Twojego biznesu w internecie. Tworzymy nowoczesne, estetyczne i funkcjonalne strony, które nie tylko wyglądają świetnie, ale także skutecznie konwertują odwiedzających w klientów.",
  list1_Title: "Nasze usługi obejmują:",
  list1_Item0: "Unikalny i dopasowany design – Twoja strona wyróżni się na tle konkurencji",
  list1_Item1: "Responsywność (RWD) – perfekcyjny wygląd na komputerach, tabletach i smartfonach",
  list1_Item2: "UX/UI optymalizacja – intuicyjna nawigacja i przemyślana struktura",
  list1_Item3: "Nowoczesne narzędzia – projektujemy w Figma, Affinity Photo, Designer, Photoshop i innych profesjonalnych programach",
  icon: checkIcon,
};

const InfoDesign = () => {
return (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="my-auto p-4">
                <h2 className="text-2xl mb-8 md:text-3xl">{infoDesign.heading}</h2>
                <p className="my-6 space-y-4">{infoDesign.description}</p>

                <div className="my-6 space-y-4">
                <h3 className="text-xl md:text-xl">{infoDesign.list1_Title}</h3>
                <ul className="flex flex-col text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-s my-3 space-y-2">
                    <li className="my-1 flex items-center">
                        {infoDesign.icon}
                        {infoDesign.list1_Item0}
                    </li>
                    <li className="my-1 flex items-center">
                        {infoDesign.icon}
                        {infoDesign.list1_Item1}
                    </li>
                    <li className="my-1 flex items-center">
                        {infoDesign.icon}
                        {infoDesign.list1_Item2}
                    </li>
                    <li className="my-1 flex items-center">
                        {infoDesign.icon}
                        {infoDesign.list1_Item3}
                    </li>
                </ul>
                </div>
            </div>
            <div className=" p-4">
                <img src="/design.webp" alt="Usługi nowoczesnego designu" />
            </div>
        </div>
    </div>
);
};

export default InfoDesign;

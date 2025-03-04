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

const infoWWW = {
  heading: "Tworzenie stron internetowych i sklepów e-commerce",
  description:
    "Szukasz nowoczesnej i skutecznej strony internetowej lub sklepu e-commerce? Tworzymy responsywne, szybkie i zoptymalizowane pod SEO strony internetowe oraz sklepy online, które pomagają rozwijać Twój biznes.",
  list1_Title: "Nasze usługi obejmują:",
  list1_Item0: "Nowoczesny design dopasowany do Twojej marki",
  list1_Item1: "Optymalizacja pod urządzenia mobilne (RWD)",
  list1_Item2: "Szybkość i bezpieczeństwo strony",
  list1_Item3: "Sklepy na WordPress + WooCommerce",
  list2_Title: "Sklepy e-commerce, które sprzedają",
  list2_Item0: "Sklepy na WordPress + WooCommerce, PrestaShop, Shopify",
  list2_Item1: "Integracje z Allegro, hurtowniami i systemami ERP",
  list2_Item2: "Wygodne systemy płatności i dostawy",
  list2_Item3: "Kompleksowa obsługa – od projektu po wdrożenie",
  icon: checkIcon,
};

const InfoWWW = () => {
return (
    <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="p-4">
                <img src="/kontakt.webp" alt="Usługi WWW" />
            </div>
            <div className="my-auto p-4">

                
                <h2 className="text-2xl mb-8 md:text-3xl">{infoWWW.heading}</h2>
                <p className="my-6 space-y-4">{infoWWW.description}</p>


                <div className="my-6 space-y-4">
                <h3 className="text-xl md:text-xl">{infoWWW.list1_Title}</h3>
                <ul className="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-s my-3 space-y-2">
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list1_Item0}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list1_Item1}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list1_Item2}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list1_Item3}
                    </li>
                </ul>
                </div>

                <div className="my-6 space-y-4">
                <h3 className="text-xl md:text-xl">{infoWWW.list2_Title}</h3>
                <ul className="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-s my-3 space-y-2">
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list2_Item0}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list2_Item1}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list2_Item2}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoWWW.icon}
                        {infoWWW.list2_Item3}
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
);
};

export default InfoWWW;

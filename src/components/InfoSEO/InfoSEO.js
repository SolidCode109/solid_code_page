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

const infoSEO = {
  heading: "Pozycjonowanie stron WWW i sklepów e-commerce – Zwiększ swoją widoczność w sieci",
  description:
    "Czy Twoja strona internetowa lub sklep e-commerce nie przynosi oczekiwanych rezultatów? Kluczem do sukcesu jest pozycjonowanie (SEO) – strategia, która poprawia widoczność Twojej strony w wynikach wyszukiwania Google. Dzięki temu zyskujesz więcej klientów i zwiększasz sprzedaż!",
  list1_Title: "Dlaczego warto inwestować w SEO?",
  list1_Item0: "Więcej ruchu na stronie – im wyżej Twoja strona w Google, tym więcej odwiedzających.",
  list1_Item1: "Większa sprzedaż – lepsza widoczność oznacza więcej potencjalnych klientów.",
  list1_Item2: "Długoterminowe efekty – dobrze przeprowadzone SEO przynosi korzyści przez wiele miesięcy.",
  list1_Item3: "Budowanie zaufania – użytkownicy częściej klikają w strony znajdujące się na pierwszej stronie wyników.",
  icon: checkIcon,
};

const InfoSEO = () => {
return (
    <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="p-4">
                <img src="/seo.webp" alt="Usługi SEO" />
            </div>
            <div className="my-auto p-4">

                
                <h2 className="text-2xl mb-8 md:text-3xl">{infoSEO.heading}</h2>
                <p className="my-6 space-y-4">{infoSEO.description}</p>


                <div className="my-6 space-y-4">
                <h3 className="text-xl md:text-xl">{}</h3>
                <ul className="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-s my-3 space-y-2">
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoSEO.icon}
                        {infoSEO.list1_Item0}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoSEO.icon}
                        {infoSEO.list1_Item1}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoSEO.icon}
                        {infoSEO.list1_Item2}
                    </li>
                    <li className="my-1 flex w-full sm:w-1/2 items-center">
                        {infoSEO.icon}
                        {infoSEO.list1_Item3}
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
);
};

export default InfoSEO;

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-between pb-2 pl-3 bg-red-500 md:flex-col md:px-6 md:justify-between">
      <div className="mt-5 w-44 h-44">
        <a
          title="Universiteti i Prishtinës"
          href="https://fiek.uni-pr.edu/"
          target="_blank"
          rel="noreferrer"
          class="block w-32 h-32 md:w-44 md:h-44 transition-all rounded-full shadow hover:shadow-xl transform scale hover:scale-110 duration-300"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/University_of_Prishtina_logo.svg/2053px-University_of_Prishtina_logo.svg.png"
          />
        </a>
      </div>
      <div className="mb-5 text-left transition-all duration-500 transform scale hover:shadow-lg transform-all hover:scale-125">
        <h1 className="text-base font-bold text-red-100 md:text-lg">
          "Universiteti i Prishtinës"
        </h1>
        <h2 className="text-sm font-semibold text-red-100 md:text-base">
          Studenti: Edon Budakova
        </h2>
        <h3 className="text-xs font-normal text-red-100 md:text-xs">
          Fakulteti i Inxhinierisë Elektrike <br /> dhe Kompjuterike, 2022
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;

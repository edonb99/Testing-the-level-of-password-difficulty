import React from 'react';

const Sidebar = () => {

    return(
        <div className="flex flex-row-reverse justify-between pl-3 items-center pb-2 md:flex-col md:px-6 md:justify-between bg-red-500">

            <div className="w-44 h-44 mt-5">
                <a title="Universiteti i Prishtinës" href="https://fiek.uni-pr.edu/" target="_blank" class="block w-32 h-32 md:w-44 md:h-44 transition-all rounded-full shadow hover:shadow-xl transform scale hover:scale-110 duration-300">
                    <img class="object-cover object-center w-full h-full rounded-full" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/University_of_Prishtina_logo.svg/2053px-University_of_Prishtina_logo.svg.png"/>
                </a>
            </div>
            <div className="transition-all transform scale hover:shadow-lg transform-all hover:scale-125 duration-500 text-left mb-5">
                <h1 className="text-base md:text-lg text-red-100 font-bold">"Universiteti i Prishtinës"</h1>
                <h2 className="text-sm md:text-base text-red-100 font-semibold">Studenti: Edon Budakova</h2>
                <h3 className="text-xs md:text-xs text-red-100 font-normal">Fakulteti i Inxhinierisë Elektrike <br /> dhe Kompjuterike, 2022</h3>
            </div>
        </div>
    );
}

export default Sidebar;

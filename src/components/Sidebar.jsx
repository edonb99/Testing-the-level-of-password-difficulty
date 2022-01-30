import React from 'react';

const Sidebar = () => {

    return(
        <div className="flex flex-col px-6 justify-between bg-red-500">

            <div className="w-44 h-44 mt-5">
                <a title="Universiteti i Prishtinës" href="https://fiek.uni-pr.edu/" target="_blank" class="block w-44 h-44 transition-all rounded-full shadow hover:shadow-xl transform scale hover:scale-110 duration-300">
                    <img class="object-cover object-center w-full h-full rounded-full" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/University_of_Prishtina_logo.svg/2053px-University_of_Prishtina_logo.svg.png"/>
                </a>
            </div>
            <div className="transition-all transform scale hover:shadow-lg transform-all hover:scale-125 duration-500 text-left mb-5">
                <h1 className="text-lg text-red-100 font-bold">"Universiteti i Prishtinës"</h1>
                <h2 className="text-base text-red-100 font-semibold">Studenti: Edon Budakova</h2>
                <h3 className="text-xs text-red-100 font-normal">Fakulteti i Inxhinierisë Elektrike <br /> dhe Kompjuterike, 2022</h3>
            </div>
        </div>
    );
}

export default Sidebar;

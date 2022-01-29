import React from 'react';

const Sidebar = () => {

    return(
        <div className="flex flex-col px-14 justify-between bg-red-500">

            <div className="w-44 h-44 mt-5">
                <a title="Universiteti i Prishtinës" href="https://fiek.uni-pr.edu/" target="_blank" class="block w-44 h-44 transition-all rounded-full shadow hover:shadow-xl transform scale hover:scale-110 duration-300">
                    <img class="object-cover object-center w-full h-full rounded-full" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/University_of_Prishtina_logo.svg/2053px-University_of_Prishtina_logo.svg.png"/>
                </a>
            </div>
            <div className="transition-all  transform scale hover:shadow-lg transform-all hover:scale-110 duration-500 text-red-100 font-medium text-left mb-5">
                <h1>"Universiteti i Prishtinës"</h1>
                <h3>Studenti: Edon Budakova</h3>
                <p>FIEK 2022</p>
            </div>
        </div>
    );
}

export default Sidebar;

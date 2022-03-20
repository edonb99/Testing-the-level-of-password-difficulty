import React, { useState } from 'react';

export default function Algoritmi() {
    const [result, setResult] = useState('');

    function strongPasswordChecker(password) {
        let adds = Math.max(0, 6 - password.length);
        let subs = Math.max(0, password.length - 20);

        let lower = (password.match(/[a-z]/g) ?? []).length === 0 ? 1 : 0;
        let upper = (password.match(/[A-Z]/g) ?? []).length === 0 ? 1 : 0;
        let number = (password.match(/[0-9]/g) ?? []).length === 0 ? 1 : 0;
        let mods = lower + upper + number;
        let tris = (password.match(/(.)\1{2,2}/g) ?? []).length;

        let grps = (password.match(/(.)\1{2,}/g) ?? []).map((value) => {    
            return value.length;
        });
        for (let i = subs; i && grps.length; i--) {
            grps = grps
                .filter((k) => {
                    return k >= 3;
                })
                .sort((a, b) => {
                    return (a % 3) - (b % 3);
                });
            tris -= grps[0] % 3 === 0 ? 1 : 0;
            grps[0]--;
        }

        let steps = 0;
        steps = Math.max(steps, tris);
        steps = Math.max(steps, mods);
        steps = Math.max(steps, adds);
        steps = steps + subs;
        setResult(steps);
    }

    return (
        <div className="mb-4">
            <div className="box-border m-0 ">
                <div className="max-w-4xl p-5 mx-auto my-0 text-center bg-gray-100 rounded-sm shadow-xl ">
                    <div className="flex flex-col items-center justify-between"></div>
                    <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center md:items-center ">
                        <h2 className="text-base font-normal md:text-xl md:font-semibold">Shëno fjalëkalimin: </h2>
                        <input
                            type="text"
                            className="w-full h-8 p-4 text-xl bg-white border-2 border-gray-900 border-solid rounded-lg shadow-lg  md:w-1/2 md:h-11"
                            onChange={(e) => strongPasswordChecker(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-4 md:items-center md:justify-center">
                    <div className="flex flex-col items-start justify-start space-x-4">
                        <p className="text-sm font-medium md:mx-2 md:text-base">Numri minimal i hapave të nevojshëm për ta bërë</p>                            
                        <p className="text-sm font-medium md:mx-2 md:text-base"> fjalëkalimin e fortë duke u bazuar në
                            <a href="https://leetcode.com/problems/strong-password-checker/"
                                target="_blank" className="underline underline-offset-4
                          decoration-sky-900/[.33] ml-1">algoritëm</a></p>  
                    </div>
                    <div className="text-5xl font-semibold text-red-500 ">
                            {result}
                        </div>
                        </div>
                </div>
            </div>
        </div>

    );
}

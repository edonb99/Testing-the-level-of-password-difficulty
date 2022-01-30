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
        <div className=" mb-4">
            <div className="box-border m-0 ">
                <div className=" max-w-4xl my-0 mx-auto bg-gray-100 p-5 shadow-xl rounded-sm text-center ">
                    <div className="flex justify-between flex-col items-center"></div>
                    <div className="flex flex-row space-x-4 justify-center items-center ">
                        <h2 className="text-lg font-semibold">Shëno fjalëkalimin: </h2>
                        <input
                            type="text"
                            className="w-1/2 h-14 text-xl border-2 border-solid border-gray-900 bg-white 
                            p-4 rounded-lg shadow-lg"
                            onChange={(e) => strongPasswordChecker(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex flex-row mt-2 items-center justify-center ">
                        <h3 className="mx-2 font-medium">Numri minimal i hapave të nevojshëm për ta bërë
                            <br /> fjalëkalimin e fortë duke u bazuar në
                            <a href="https://leetcode.com/problems/strong-password-checker/"
                                target="_blank" className="underline underline-offset-4
                          decoration-sky-900/[.33] ml-1">algoritëm</a></h3>
                        <div className=" text-red-500 font-semibold text-5xl ">
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

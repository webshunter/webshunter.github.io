import React, { useEffect, useState } from "react"

export default function HeaderImage({ dat }) {
    let {bg, title, subTitle} = dat;

    return (
        <div style={{ backgroundColor: '#f2f2f2', height: "400px", backgroundImage: "url("+bg+")" }}  className=" bg-right relative overflow-hidden h-64 bg-cover md:bg-cover bg-no-repeat p-12 text-center">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h2 className="mb-4 drop-shadow-md text-stone-50 mt-20 text-4xl font-semibold">{title}</h2>
                        <p className="mb-6 drop-shadow-md text-stone-50 text-2sm font-semibold">{subTitle}</p>
                        <button class="rounded-md mx-2 bg-white px-5 py-3 text-xl font-sans font-bold leading-7 spacong text-black hover:text-stone-50 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 tracking-wide focus-visible:outline-offset-2 focus-visible:outline-yellow-500 ease-in duration-300">Portofolio</button>
                        <button class="rounded-md mx-2 bg-white px-5 py-3 text-xl font-sans font-bold leading-7 spacong text-black hover:text-stone-50 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 tracking-wide focus-visible:outline-offset-2 focus-visible:outline-yellow-500 ease-in duration-300">Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
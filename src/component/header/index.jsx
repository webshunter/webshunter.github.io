import React, { useEffect, useState } from "react"

export default function HeaderImage({ dat }) {
    let {bg, title, subTitle} = dat;

    return (
        <div style={{ backgroundColor: '#f2f2f2', height: "400px", backgroundImage: "url("+bg+")" }}  className=" bg-right relative overflow-hidden h-64 bg-cover md:bg-contain bg-no-repeat p-12 text-center">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h2 className="mb-4 drop-shadow-md text-gray-900 mt-20 text-4xl font-semibold">{title}</h2>
                        <p className="mb-6 drop-shadow-md text-gray-900 text-2sm font-semibold">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
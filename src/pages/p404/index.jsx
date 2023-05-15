import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
    return (<>
        <div className="bg-gray-200 min-h-[100vh] overflow-x-hidden flex justify-center items-center">
            <div className="bg-white min-w-[320px] max-w-[320px] md:max-w-[480px] rounded-md p-10 shadow-sm">
                <h1 className="text-2xl text-center">Page Not Found</h1>
                <p className="mt-3">Halaman yang anda minta saat ini tidak tersedia.</p>
                <div className="text-center mt-4">
                    <Link to="/" className="shadow-md rounded-md text-white bg-blue-500 p-2 inline-flex items-center justify-center">Kembali</Link>
                </div>
            </div>
        </div>
    </>)
}

export default PageNotFound;
import React from "react";
import Preview from "./Preview";
import Stats from "./Stats";

export const Main = () => {
    return (
        <>
            <div className={`w-11/12 border-2 border-[#121212] rounded-[15px] mt-10 ml-auto mr-auto h-[500px] flex justify-evenly`}>
                <Stats />
                <Preview />
            </div>
        </>
    )
}

export default Main
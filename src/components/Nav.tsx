import React from 'react';

type styleProps = {
    heading: string
}

export const Nav = (props: styleProps) => {

    return (
        <>
            <header className="flex justify-around items-center bg-[#20232a] text-[#f2f2f2] p-4">
                <h1 className="text-2xl font-bold">{props.heading}</h1>
                <h1 className="text-1xl font-bold"><a href="https://github.com/bilalshahzadd/money-tracker" className="text-[#61dafb]" target="_blank">Source Code</a></h1>
            </header>
        </>
    )
}

export default Nav
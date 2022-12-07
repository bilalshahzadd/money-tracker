import React from 'react';

type styleProps = {
    heading: string
}

export const Nav = (props: styleProps) => {

    return (
        <>
            <header className="flex justify-around items-center bg-[#20232a] text-[#f2f2f2] p-4">
                <h1 className="text-2xl font-bold">{props.heading}</h1>
                <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                     after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-[#f2f2f2]">Dark Theme</span>
                </label>
            </header>
        </>
    )
}

export default Nav
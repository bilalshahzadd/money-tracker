import React from "react";
import { useState } from "react";

export const Main = () => {

    const [income, setIncome] = useState(0);
    const [houseExpense, setHouseExpense] = useState(0);
    const [travelExpense, setTravelExpense] = useState(0);
    const [extras, setExtras] = useState(0);
    const totalExpense = houseExpense + travelExpense + extras;
    const totalSavings = income - totalExpense;

    const takeIncome = (event: any) => {
        setIncome(event.target.valueAsNumber);
    }

    const takeHouseExpense = (event: any) => {
        setHouseExpense(event.target.valueAsNumber);
    }

    const takeTravelExpense = (event: any) => {
        setTravelExpense(event.target.valueAsNumber);
    }

    const takeExtras = (event: any) => {
        setExtras(event.target.valueAsNumber);
    }

    const saveInformation = () => {
        const data = {
            income: income,
            houseExpense: houseExpense,
            travelExpense: travelExpense,
            extras: extras,
            totalExpense: totalExpense,
            totalSavings: totalSavings
        }

        localStorage.setItem('items', JSON.stringify(data));
    }

    const fetchInformation = () => {
        const items = localStorage.getItem('items');
        const convertedString = JSON.stringify(items);
        console.log(convertedString);
    }

    fetchInformation();

    return (
        <>

            <div className="w-full border-[#121212] bg-[#282c34] h-[520px] flex justify-evenly max-[600px]:pt-3 max-[600px]:flex-col max-[600px]:h-auto">
                <div className="w-5/12 border-2 border-[#f2f2f2] rounded-[8px] h-[27rem] mt-10 p-5 max-[600px]:w-11/12 max-[600px]:m-auto">
                    <div className="flex flex-col gap-2 text-[#f2f2f2]">
                        <h2 className="text-3xl font-bold">Make Your Budget</h2>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="salary" className="font-bold">Your Monthly Income:</label>
                            <div className="currency-wrap">
                                <span className="currency-code">$</span>
                                <input type="number" className="text-currency" value={income} onChange={takeIncome} />
                            </div>
                            <label htmlFor="salary" className="font-bold">Your Household Expenses:</label>
                            <div className="currency-wrap">
                                <span className="currency-code">$</span>
                                <input type="number" className="text-currency" value={houseExpense} onChange={takeHouseExpense} />
                            </div>
                            <label htmlFor="salary" className="font-bold">Your Traveling Expenses:</label>
                            <div className="currency-wrap">
                                <span className="currency-code">$</span>
                                <input type="number" className="text-currency" value={travelExpense} onChange={takeTravelExpense} />
                            </div>
                            <label htmlFor="salary" className="font-bold">Extras:</label>
                            <div className="currency-wrap">
                                <span className="currency-code">$</span>
                                <input type="number" className="text-currency" value={extras} onChange={takeExtras} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/12 border-2 border-[#f2f2f2] rounded-[8px] h-[27rem] mt-10 p-5 max-[600px]:w-11/12 max-[600px]:mt-3 max-[600px]:m-auto max-[600px]:mb-10">
                    <div className="flex flex-col gap-5 text-[#f2f2f2]">
                        <h2 className="text-3xl font-bold">Your Expenses</h2>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Income:</p>
                            <p className="text-l font-semibold">${!income ? " " : income}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Household Expenses:</p>
                            <p className="text-l font-semibold">${!houseExpense ? " " : houseExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Travel Expenses:</p>
                            <p className="text-l font-semibold">${!travelExpense ? " " : travelExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Extras:</p>
                            <p className="text-l font-semibold">${!extras ? " " : extras}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Total Expense:</p>
                            <p className="text-l font-semibold">${!totalExpense ? " " : totalExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Total Saving:</p>
                            <p className="text-l font-semibold">${!totalSavings ? " " : totalSavings}<span className="text-[#FF0000]">{totalExpense > income ? " You are in debt" : " "}</span></p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button className="border-2 border-[#f2f2f2] rounded-[5px] bg-[#f2f2f2] text-[#282c34] py-[5px] px-[40px]" onClick={saveInformation}>Save Information</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
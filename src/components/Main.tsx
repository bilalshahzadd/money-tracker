import React from "react";
import { useState } from "react";

export const Main = () => {

    const [income, setIncome] = useState(1000);
    const [houseExpense, setHouseExpense] = useState(300);
    const [travelExpense, setTravelExpense] = useState(200);
    const [extras, setExtras] = useState(50);
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

    return (
        <>

            <div className={`w-11/12 border-2 border-[#121212] rounded-[15px] mt-10 ml-auto mr-auto h-[520px] flex justify-evenly`}>
                <div className={`w-5/12 border-2 border-[#121212] rounded-[15px] h-[27rem] mt-10 p-5`}>
                    <div className="flex flex-col gap-2">
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
                <div className={`w-5/12 border-2 border-[#121212] rounded-[15px] h-[27rem] mt-10 p-5`}>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl font-bold">Your Expenses</h2>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Income:</p>
                            <p className="text-l font-semibold">${income}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Household Expenses:</p>
                            <p className="text-l font-semibold">${houseExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Your Travel Expenses:</p>
                            <p className="text-l font-semibold">${travelExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Extras:</p>
                            <p className="text-l font-semibold">${extras}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Total Expense:</p>
                            <p className="text-l font-semibold">${totalExpense}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xl font-bold">Total Saving:</p>
                            <p className="text-l font-semibold">${totalSavings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
import React from 'react';

const FinanceAssist = () => {
    return (
        <div className="h-[640px] rounded-xl m-2 p-10 bg-gold flex justify-between p-8 bg-cover bg-center bg-no-repeat" >
            <div className="w-full">
                <h1 className="text-4xl  text-white m-2 mb-6">Finance <br /> Assistance</h1>
                <div className='flex flex-row w-full justify-between'>
                    <textarea
                        className="w-3/5 h-52 p-4 m-2 mb-4 text-gray-700 rounded-md border border-gray-300"
                        placeholder="Submit your query to us.."
                    ></textarea>
                    <div className="w-full flex flex-col justify-center m-2  p-2">
                        <div className="flex justify-end mb-4" >
                            <div className="bg-[#ffffff25] p-2 text-white rounded-lg shadow-md flex items-center justify-between w-3/5 ">
                                <span className="text-2xl font-bold">+</span>
                                <span className="mx-4">85+ lenders to choose from</span>
                                <span className="text-2xl font-bold">+</span>
                            </div>
                        </div>
                        <div className="flex justify-end mb-4" >
                            <div className="bg-[#ffffff25] p-2 text-white rounded-lg shadow-md flex items-center justify-between w-3/5 ">
                                <span className="text-2xl font-bold">+</span>
                                <span className="mx-4">Digital loan sanctions</span>
                                <span className="text-2xl font-bold">+</span>
                            </div>
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="bg-[#ffffff25] p-2 text-white rounded-lg shadow-md flex items-center justify-between w-3/5">
                                <span className="text-2xl font-bold">+</span>
                                <span className="mx-4">Agent Support</span>
                                <span className="text-2xl font-bold">+</span>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-[#ffffff25] text-white p-2 rounded-lg shadow-md flex items-center justify-between w-3/5">
                                <span className="text-2xl font-bold">+</span>
                                <span className="mx-4">Step-by-Step tracking</span>
                                <span className="text-2xl font-bold">+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="bg-white m-2 hover:bg-white text-gold font-bold py-2 px-4 rounded">
                    Send
                </button>
            </div>

        </div>
    );
};

export default FinanceAssist;

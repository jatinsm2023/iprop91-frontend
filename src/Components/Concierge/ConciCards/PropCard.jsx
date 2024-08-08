export default function PropCard() {
    return (
        <>
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white p-4 border border-b-4 hover:border-gold m-2">
                <img className="w-full rounded-xl" src="./images/2.jpg" alt="Mahira Homes" />
                <div className="flex flex-row justify-between my-2">
                    <div>
                        <div className="font-semibod text-xl">Mahira</div>
                        <p className="text-gray-700 text-base">
                            Mahira Homes 63A
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Tower: A<br />
                        Unit: 101
                    </p>
                </div>
                <div className="flex justify-between w-full">
                    <button className="bg-gray-100 text-black py-2 px-4 rounded-xl w-1/2 m-1">
                        Rent
                    </button>
                    <button className="bg-gray-100 text-black py-2 px-4 rounded-xl w-1/2 m-1">
                        Sell
                    </button>
                </div>
            </div>
        </>
    )
}
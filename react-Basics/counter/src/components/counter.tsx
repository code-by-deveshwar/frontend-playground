import { useMemo, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [compact, setCompact] = useState(true);

    const increment = () => setCounter(c => c + 1);
    const decrement = () => setCounter(c => Math.max(0, c - 1));
    const resetFunc = () => setCounter(0);
    const multiplyBy10 = () => setCounter(c => c * 10);

    // Compact formatter (e.g., 1234567 -> 1.2M)
    const compactFmt = useMemo(
        () => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }),
        []
    );

    const display = compact
        ? compactFmt.format(counter)
        : counter.toLocaleString();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Counter</h1>

            <div className="flex items-center space-x-6 bg-white shadow-lg rounded-2xl px-6 py-4 w-full max-w-md">
                {/* Decrement */}
                <button
                    onClick={decrement}
                    className="w-12 h-12 text-xl font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={counter === 0}
                    aria-label="Decrement"
                >
                    −
                </button>

                {/* Number (scrollable if too long) */}
                <div className="flex-1 min-w-0">
                    <span
                        className="
              block text-2xl font-semibold text-gray-800 text-center
              whitespace-nowrap overflow-x-auto no-scrollbar font-mono px-1
            "
                        title={counter.toString()} /* full value on hover */
                    >
                        {display}
                    </span>
                </div>

                {/* Increment */}
                <button
                    onClick={increment}
                    className="w-12 h-12 text-xl font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-md transition duration-200"
                    aria-label="Increment"
                >
                    +
                </button>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
                <button
                    onClick={resetFunc}
                    className="px-5 py-2 text-lg font-semibold text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={counter === 0}
                >
                    Reset
                </button>

                <button
                    onClick={multiplyBy10}
                    className="px-5 py-2 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={counter == 0}
                >
                    Multiply ×10
                </button>

                <button
                    onClick={() => setCompact(v => !v)}
                    className="px-5 py-2 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 rounded-lg shadow-md transition duration-200"
                >
                    {compact ? "Show Full" : "Show Compact"}
                </button>
            </div>
        </div>
    );
};

export default Counter;

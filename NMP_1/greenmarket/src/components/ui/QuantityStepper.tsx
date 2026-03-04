"use client";

import { useState } from "react";

export function QuantityStepper({
    initialQuantity = 1,
    min = 1,
    max = 100,
    onChange,
}: {
    initialQuantity?: number;
    min?: number;
    max?: number;
    onChange?: (quantity: number) => void;
}) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrease = () => {
        if (quantity > min) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            onChange?.(newQty);
        }
    };

    const handleIncrease = () => {
        if (quantity < max) {
            const newQty = quantity + 1;
            setQuantity(newQty);
            onChange?.(newQty);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <button
                type="button"
                onClick={handleDecrease}
                disabled={quantity <= min}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors"
            >
                <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="font-bold w-4 text-center">{quantity}</span>
            <button
                type="button"
                onClick={handleIncrease}
                disabled={quantity >= max}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors"
            >
                <span className="material-symbols-outlined text-sm">add</span>
            </button>
        </div>
    );
}

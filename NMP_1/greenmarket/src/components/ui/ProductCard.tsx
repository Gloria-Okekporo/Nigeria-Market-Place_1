"use client";

import { toast } from "sonner";

export function ProductCard({
    image,
    title,
    seller,
    sku,
    price,
    postedTime,
}: {
    image: string;
    title: string;
    seller: string;
    sku: string;
    price: string | number;
    postedTime: string;
}) {
    const displayPrice = typeof price === 'number' ? `₦${price.toLocaleString()}` : price;
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        toast.success(`Added ${title} to cart`);
    };

    return (
        <div className="group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all">
            <div className="aspect-square bg-slate-100 overflow-hidden relative">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={title}
                    src={image}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 px-4">
                    <button
                        onClick={handleAddToCart}
                        className="w-full py-2 bg-primary text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 text-xs"
                    >
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                    </button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white truncate">{title}</h3>
                <p className="text-xs text-slate-500 mb-2">Seller: {seller} • SKU: {sku}</p>
                <div className="flex justify-between items-center">
                    <span className="text-primary font-black">{displayPrice}</span>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">{postedTime}</span>
                </div>
            </div>
        </div>
    );
}

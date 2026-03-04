"use client";

import { useState } from "react";

const REVIEWS = [
    {
        id: 1,
        customer: "John Doe",
        rating: 5,
        date: "2 days ago",
        product: "Fresh Scotch Bonnet Peppers",
        comment: "The peppers were extremely fresh and well packaged. Fast delivery too! Highly recommended.",
        reply: "Thank you for the wonderful feedback, John! We're glad you loved the peppers. Hope to serve you again soon.",
    },
    {
        id: 2,
        customer: "Sarah Ahmed",
        rating: 4,
        date: "1 week ago",
        product: "Organic Yam Tubers",
        comment: "Good yams, very large. But one of them had a small scratch. Overall good quality.",
        reply: "",
    },
    {
        id: 3,
        customer: "Michael Okon",
        rating: 5,
        date: "2 weeks ago",
        product: "Fresh Scotch Bonnet Peppers",
        comment: "Always buying from Iya Ayo. Best quality in the market. No cap!",
        reply: "Thanks for your continuous patronage Michael!",
    },
];

export default function SellerReviewsPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="flex flex-col gap-6 max-w-[1000px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Reviews & Ratings</h1>
                    <p className="text-slate-500 text-sm">Monitor and improve your store's reputation.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-black mb-2">4.8</h2>
                    <div className="flex text-primary mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`material-symbols-outlined ${star <= 4.8 ? 'fill-star' : ''}`}>star</span>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500">Based on 124 reviews</p>
                </div>

                <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-center gap-2">
                    {[
                        { stars: 5, count: 98, percent: 80 },
                        { stars: 4, count: 15, percent: 12 },
                        { stars: 3, count: 7, percent: 5 },
                        { stars: 2, count: 3, percent: 2 },
                        { stars: 1, count: 1, percent: 1 },
                    ].map((bar) => (
                        <div key={bar.stars} className="flex items-center gap-4 text-sm">
                            <span className="font-bold w-12 flex items-center gap-1">{bar.stars} <span className="material-symbols-outlined text-[14px] fill-star text-primary">star</span></span>
                            <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full relative" style={{ width: `${bar.percent}%` }}></div>
                            </div>
                            <span className="text-slate-500 w-8 text-right">{bar.count}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto">
                        {["all", "5-star", "4-star", "1-3 star", "unreplied"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-bold capitalize whitespace-nowrap transition-colors ${activeFilter === filter ? 'bg-white dark:bg-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="p-6">
                            <div className="flex justify-between items-start mb-4 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                                        {review.customer.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold leading-tight">{review.customer}</p>
                                        <p className="text-xs text-slate-500">{review.date} • {review.product}</p>
                                    </div>
                                </div>
                                <div className="flex text-primary">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={`material-symbols-outlined text-sm ${star <= review.rating ? 'fill-star' : ''}`}>star</span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 mb-4">{review.comment}</p>

                            {review.reply ? (
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50 mt-4">
                                    <p className="text-xs font-bold text-slate-500 mb-1">Your Reply</p>
                                    <p className="text-sm">{review.reply}</p>
                                </div>
                            ) : (
                                <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1 mt-2">
                                    <span className="material-symbols-outlined text-[16px]">reply</span> Reply to customer
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

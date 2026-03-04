"use client";

import Link from "next/link";

export default function AdminOverviewPage() {
    return (
        <div className="flex flex-col gap-8 h-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight mb-2">Platform Overview</h2>
                    <p className="text-slate-500 max-w-2xl">High-level metrics and system health for the GreenMarket ecosystem today.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-lg">calendar_today</span> Last 30 Days
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-8xl">payments</span>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Total GMV</p>
                    <h3 className="text-3xl font-black mb-2">₦4.2M</h3>
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">trending_up</span> 18%
                        </span>
                        <span className="text-slate-400 font-normal">vs last month</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-8xl">group</span>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Active Users</p>
                    <h3 className="text-3xl font-black mb-2">10,482</h3>
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">trending_up</span> 5.2%
                        </span>
                        <span className="text-slate-400 font-normal">vs last month</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-8xl">storefront</span>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Verified Sellers</p>
                    <h3 className="text-3xl font-black mb-2">854</h3>
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                        </span>
                        <span className="text-slate-400 font-normal">vs last month</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-8xl">warning</span>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Pending Approvals</p>
                    <h3 className="text-3xl font-black text-amber-500 mb-2">124</h3>
                    <Link href="/admin/moderation" className="text-sm font-bold text-primary hover:underline">
                        Review Products <span className="material-symbols-outlined text-[14px] align-middle">chevron_right</span>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-[400px]">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold mb-6">Recent Platform Activity</h3>
                    <div className="flex-1 overflow-y-auto space-y-6 pr-4">
                        {[
                            { icon: "person_add", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10", title: "New Seller Registration", desc: "Farm Fresh Ltd just completed identity verification.", time: "10 mins ago" },
                            { icon: "shopping_cart", color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10", title: "Large Order Placed", desc: "Order GM-99201 placed for ₦125,000", time: "25 mins ago" },
                            { icon: "report", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10", title: "Product Flagged", desc: "Product SKU: PO-009 reported by Auto-Mod for pricing anomaly.", time: "1 hr ago" },
                            { icon: "store", color: "text-primary", bg: "bg-primary/10", title: "Seller Payout Generated", desc: "Batch #441 payouts processed successfully.", time: "3 hrs ago" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
                                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                </div>
                                <div>
                                    <div className="flex items-baseline justify-between mb-1">
                                        <p className="font-bold text-sm">{item.title}</p>
                                        <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{item.time}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-full mb-6">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">monitoring</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Analytics Chart Placeholder</h3>
                    <p className="text-slate-500 max-w-sm mb-6">In a real implementation, Recharts or Chart.js would render GMV and Order volume trends here.</p>
                    <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 font-bold rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        View Detailed Reports
                    </button>
                </div>
            </div>
        </div>
    );
}

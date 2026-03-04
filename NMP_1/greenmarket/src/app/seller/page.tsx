"use client";

import Link from "next/link";
import { StatusPill } from "@/components/ui/StatusPill";

export default function SellerOverviewPage() {
    return (
        <div className="flex flex-col gap-8 max-w-[1200px]">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-black tracking-tight">Welcome Back, Ayo 👋</h1>
                    <p className="text-slate-500">Here's what's happening with your store today, March 4th.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-lg">share</span>
                        Share Store
                    </button>
                    <Link href="/seller/inventory/new" className="flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                        <span className="material-symbols-outlined text-lg">add</span>
                        New Product
                    </Link>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-full">+12.5%</span>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Today's Revenue</p>
                    <h3 className="text-2xl font-black">₦48,500</h3>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-full">+4.2%</span>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Active Orders</p>
                    <h3 className="text-2xl font-black">12</h3>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-amber-50 dark:bg-amber-500/10 rounded-lg text-amber-500">
                            <span className="material-symbols-outlined">inventory_2</span>
                        </div>
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-full">Action Needed</span>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Low Stock Items</p>
                    <h3 className="text-2xl font-black text-amber-500">3</h3>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">star</span>
                        </div>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Past 30 days</span>
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-wider mt-2">Store Rating</p>
                    <div className="flex items-baseline gap-1">
                        <h3 className="text-2xl font-black">4.8</h3>
                        <span className="text-sm text-slate-400">/5.0</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Recent Orders List */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <h2 className="text-xl font-bold">Orders Needing Attention</h2>
                        <Link href="/seller/orders" className="text-sm font-bold text-primary hover:underline">View All</Link>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-xs tracking-wider font-bold">
                                    <tr>
                                        <th className="p-4">Order ID</th>
                                        <th className="p-4">Customer</th>
                                        <th className="p-4">Items</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 font-bold">GM-99120</td>
                                        <td className="p-4">John Doe</td>
                                        <td className="p-4">2x Scotch Bonnet</td>
                                        <td className="p-4"><StatusPill status="pending" /></td>
                                        <td className="p-4 text-right">
                                            <button className="px-3 py-1.5 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">Confirm</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 font-bold">GM-99118</td>
                                        <td className="p-4">Sarah Ahmed</td>
                                        <td className="p-4">1x Mixed Vegetables Grid</td>
                                        <td className="p-4"><StatusPill status="processing" /></td>
                                        <td className="p-4 text-right">
                                            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">Update</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="p-4 font-bold">GM-99095</td>
                                        <td className="p-4">Michael Okon</td>
                                        <td className="p-4">3x Palm Oil 5L</td>
                                        <td className="p-4"><StatusPill status="shipped" /></td>
                                        <td className="p-4 text-right">
                                            <span className="text-slate-400 italic">In Transit</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Empty State Mockup
            <div className="p-12 text-center text-slate-500 flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">task_alt</span>
              <p>You're all caught up! No pending orders.</p>
            </div>
            */}
                    </div>
                </div>

                {/* Sidebar / Tasks / Top Products */}
                <div className="flex flex-col gap-8">

                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <h2 className="text-lg font-bold mb-4">To-Do List</h2>
                        <div className="space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" className="mt-0.5 border-slate-300 text-primary focus:ring-primary rounded" />
                                <div>
                                    <p className="font-bold text-sm group-hover:text-primary transition-colors">Pack Order GM-99120</p>
                                    <p className="text-xs text-slate-500">Due today by 2:00 PM</p>
                                </div>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer group text-slate-400">
                                <input type="checkbox" checked readOnly className="mt-0.5 border-slate-300 text-primary focus:ring-primary rounded opacity-50" />
                                <div>
                                    <p className="font-bold text-sm line-through">Restock Scotch Bonnets</p>
                                    <p className="text-xs">Completed yesterday</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="text-lg font-bold">Top Products</h2>
                            <Link href="/seller/inventory" className="text-xs font-bold text-primary hover:underline">Manage All</Link>
                        </div>

                        <div className="flex gap-4 items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex-shrink-0">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMT55kn_y6ScrosX8EquBPlipWHTGIl-V0ER5T8eFR0dfgiAuYedXdx7AY0heYIj3t3Dt4fBAUza1k_eap3gKweoGc2aPB71bA3tBy5W5r0dH5tVamEfFSJWXTofF5Xbh6WTjxGnJv9Ly72OV8LiDLWxi0eNJWGiZwrfiQ5X-BM3r_LIy6NozL-MN4qDuSqRJptZpoNcUn0z9g4_c5tsKqCsl-3N7HvgNEdDmcsJx8VukqbhntEvyqMgZshpzIVYxKwypdTt3fPGE" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="font-bold text-sm truncate">Fresh Scotch Bonnet</p>
                                <p className="text-xs text-slate-500">120 Baskets sold this week</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center mb-4 opacity-75">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex-shrink-0">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi84bB_-rDUTVBqGpte0R2byLYfa8ugDaZCz0fjVyWSbUJtGyA2bmfFwIV4yVQo5HBSZzRrgEejhuuxecMDCfmFyvDtrNvwjvK26IFADWX5gR2nqP28BQfCY2MvtLOtFjLVGd8kgsQubkEtVW8uVU_farmL0RRrZOpadjv3Mcx5SY2Nsj2DfCeA3hQeoXI7vqeU-QPhX714ER9eapDqLKcOcJ1Jbs0tuEnIeiKYYAZV0Q-eewZn7LZp0qGfd0ujThQgt4FN6E0Vtk" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="font-bold text-sm truncate">Ugu Leaves (Bundle)</p>
                                <p className="text-xs text-slate-500">85 Bundles sold this week</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

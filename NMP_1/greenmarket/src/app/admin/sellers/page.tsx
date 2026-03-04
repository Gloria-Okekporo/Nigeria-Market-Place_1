"use client";

import { StatusPill } from "@/components/ui/StatusPill";

const MOCK_SELLERS = [
    { id: "SLR-1002", name: "Iya Ayo Fresh Foods", owner: "Ayo Balogun", market: "Mile 12 Market", joined: "Jan 12, 2024", products: 45, rating: 4.8, status: "active" },
    { id: "SLR-1005", name: "Enugu Roots & Tubers", owner: "Chima Okafor", market: "Oyingbo Market", joined: "Feb 03, 2024", products: 12, rating: 4.5, status: "active" },
    { id: "SLR-1008", name: "Delta Catch Seafoods", owner: "Efe Okonkwo", market: "Makoko Market", joined: "Mar 01, 2024", products: 8, rating: 4.9, status: "pending" },
    { id: "SLR-1012", name: "Mama G's Garden", owner: "Grace Uche", market: "Bodija Market", joined: "Dec 05, 2023", products: 156, rating: 4.2, status: "active" },
    { id: "SLR-1015", name: "Tasty Spices Ltd", owner: "Bola Ahmed", market: "Wuse Market", joined: "Nov 22, 2023", products: 34, rating: 3.5, status: "suspended" },
];

export default function AdminSellersPage() {
    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Sellers Management</h2>
                    <p className="text-slate-500 text-sm">Approve, suspend, and manage seller accounts across the platform.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined text-lg">person_add</span>
                    Invite Seller
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Sellers</p>
                        <h3 className="text-2xl font-black">854</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <span className="material-symbols-outlined">storefront</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Pending Review</p>
                        <h3 className="text-2xl font-black text-amber-500">12</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Suspended</p>
                        <h3 className="text-2xl font-black text-red-500">8</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500">
                        <span className="material-symbols-outlined">gavel</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col flex-1 overflow-hidden">

                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input type="text" placeholder="Search sellers, owners, or IDs..." className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary w-full" />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-lg">filter_list</span> Filter
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold uppercase text-xs tracking-wider sticky top-0 z-10">
                            <tr>
                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></th>
                                <th className="p-4">Store Name</th>
                                <th className="p-4">Owner</th>
                                <th className="p-4">Market Region</th>
                                <th className="p-4">Products</th>
                                <th className="p-4">Rating</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_SELLERS.map((seller) => (
                                <tr key={seller.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 dark:text-white">{seller.name}</span>
                                            <span className="text-xs text-slate-500">{seller.id} - Joined {seller.joined}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">{seller.owner.charAt(0)}</div>
                                        {seller.owner}
                                    </td>
                                    <td className="p-4 text-slate-500">{seller.market}</td>
                                    <td className="p-4 font-bold">{seller.products}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-1 font-bold">
                                            {seller.rating} <span className="material-symbols-outlined text-[14px] fill-star text-primary">star</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${seller.status === 'active' ? 'bg-green-50 text-green-600 dark:bg-green-500/10' :
                                                seller.status === 'pending' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10' :
                                                    'bg-red-50 text-red-600 dark:bg-red-500/10'
                                            }`}>
                                            {seller.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        {seller.status === 'pending' && <button className="px-3 py-1 bg-primary/10 text-primary font-bold rounded-lg text-xs mr-2 hover:bg-primary/20">Review KYC</button>}
                                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors tooltip" title="View Profile"><span className="material-symbols-outlined text-lg align-middle">visibility</span></button>
                                        <button className="ml-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors tooltip" title="More Options"><span className="material-symbols-outlined text-lg align-middle">more_vert</span></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Setup */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500 bg-slate-50 dark:bg-slate-900">
                    <span>Showing 1 to 5 of 854 sellers</span>
                    <div className="flex gap-1">
                        <button disabled className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                        <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

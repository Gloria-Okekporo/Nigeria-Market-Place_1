"use client";

import { useState } from "react";
import { StatusPill } from "@/components/ui/StatusPill";

const MOCK_ORDERS = [
    { id: "GM-99120", customer: "John Doe", date: "Today, 10:30 AM", items: 2, total: 5000, status: "pending", location: "Ikeja, Lagos" },
    { id: "GM-99118", customer: "Sarah Ahmed", date: "Today, 09:15 AM", items: 1, total: 1500, status: "processing", location: "Surulere, Lagos" },
    { id: "GM-99095", customer: "Michael Okon", date: "Yesterday", items: 5, total: 12500, status: "shipped", location: "Yaba, Lagos" },
    { id: "GM-98900", customer: "Grace Musa", date: "Mar 1st", items: 3, total: 7800, status: "delivered", location: "Lekki, Lagos" },
];

export default function SellerOrdersPage() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredOrders = MOCK_ORDERS.filter(order => {
        if (activeTab === "all") return true;
        if (activeTab === "active") return ["pending", "processing"].includes(order.status);
        if (activeTab === "shipped") return order.status === "shipped";
        if (activeTab === "completed") return order.status === "delivered";
        return true;
    });

    return (
        <div className="flex flex-col gap-6 max-w-[1200px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Order Management</h1>
                    <p className="text-slate-500 text-sm">Review, process, and track customer orders.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export
                    </button>
                </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["all", "active", "shipped", "completed"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors capitalize ${activeTab === tab
                                ? 'bg-primary text-slate-900 shadow-sm shadow-primary/20'
                                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="relative w-full sm:w-80">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input type="text" placeholder="Search Order ID or Customer Name..." className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary w-full" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></th>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Destination</th>
                                <th className="p-4">Total</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {filteredOrders.map(order => (
                                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></td>
                                    <td className="p-4 font-bold text-slate-900 dark:text-white">{order.id}</td>
                                    <td className="p-4 text-slate-500">{order.date}</td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold">{order.customer}</span>
                                            <span className="text-xs text-slate-500">{order.items} Items</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-500">{order.location}</td>
                                    <td className="p-4 font-bold">₦{order.total.toLocaleString()}</td>
                                    <td className="p-4"><StatusPill status={order.status as any} /></td>
                                    <td className="p-4 text-right">
                                        {order.status === 'pending' && <button className="px-3 py-1.5 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors">Confirm</button>}
                                        {order.status === 'processing' && <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors">Ship Order</button>}
                                        {['shipped', 'delivered'].includes(order.status) && <button className="px-3 py-1.5 text-slate-500 font-bold hover:text-slate-900 dark:hover:text-white transition-colors">Details</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

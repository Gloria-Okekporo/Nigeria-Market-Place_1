"use client";

import { useState } from "react";
import { StatusPill } from "@/components/ui/StatusPill";

const MOCK_ORDERS = [
    {
        id: "GM-99120",
        date: "2024-03-04",
        total: 14500,
        status: "processing",
        items: [
            { name: "Fresh Scotch Bonnet Peppers", qty: 2, price: 2500, seller: "Ayo's Farm" },
            { name: "Organic Yam Tubers", qty: 1, price: 8000, seller: "Enugu Roots" }
        ],
        deliveryEst: "Tomorrow, 8AM - 12PM"
    },
    {
        id: "GM-99085",
        date: "2024-02-28",
        total: 5800,
        status: "delivered",
        items: [
            { name: "Smoked Catfish (Pack of 4)", qty: 1, price: 4500, seller: "Delta Catch" }
        ],
        deliveryEst: "Delivered on Mar 1st"
    },
    {
        id: "GM-98942",
        date: "2024-02-15",
        total: 21500,
        status: "cancelled",
        items: [
            { name: "Red Palm Oil 5L", qty: 2, price: 7500, seller: "Ovia Farms" },
            { name: "Jollof Rice Spice Mix", qty: 3, price: 1200, seller: "Tasty Spices Ltd" }
        ],
        deliveryEst: "Cancelled"
    }
];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredOrders = MOCK_ORDERS.filter(order => {
        if (activeTab === "all") return true;
        if (activeTab === "active") return ["pending", "processing", "shipped"].includes(order.status);
        if (activeTab === "completed") return order.status === "delivered";
        if (activeTab === "cancelled") return order.status === "cancelled";
        return true;
    });

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div>
                    <h1 className="text-2xl font-bold">Orders & Tracking</h1>
                    <p className="text-slate-500 text-sm">Track your recent orders and view order history.</p>
                </div>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input type="text" placeholder="Search orders..." className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary w-full sm:w-64" />
                </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["all", "active", "completed", "cancelled"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors capitalize ${activeTab === tab
                                ? 'bg-primary text-slate-900 shadow-sm shadow-primary/20'
                                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                    >
                        {tab} Orders
                    </button>
                ))}
            </div>

            <div className="space-y-6">
                {filteredOrders.length === 0 ? (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center flex flex-col items-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">inventory_2</span>
                        <p className="text-lg font-bold mb-2">No orders found</p>
                        <p className="text-slate-500">You don't have any orders in this category yet.</p>
                    </div>
                ) : (
                    filteredOrders.map(order => (
                        <div key={order.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 md:px-6 md:py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Order Placed</p>
                                        <p className="font-medium text-slate-900 dark:text-white">{new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total</p>
                                        <p className="font-medium text-slate-900 dark:text-white">₦{order.total.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Order #</p>
                                        <p className="font-medium text-slate-900 dark:text-white">{order.id}</p>
                                    </div>
                                </div>
                                <div>
                                    <StatusPill status={order.status as any} />
                                </div>
                            </div>

                            <div className="p-4 md:p-6 flex flex-col gap-6">
                                <div>
                                    <h3 className="font-bold flex items-center gap-2 mb-4">
                                        <span className="material-symbols-outlined text-primary">local_shipping</span>
                                        {order.status === 'delivered' ? 'Delivered' : 'Estimated Delivery'}: <span className="text-slate-600 dark:text-slate-400 font-normal">{order.deliveryEst}</span>
                                    </h3>

                                    {['pending', 'processing', 'shipped'].includes(order.status) && (
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-6 overflow-hidden flex">
                                            <div className={`h-full ${order.status === 'pending' ? 'w-1/3 bg-blue-500' : order.status === 'processing' ? 'w-2/3 bg-amber-500' : 'w-full bg-primary'}`}></div>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-center">
                                                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-slate-400">eco</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-sm md:text-base">{item.name}</p>
                                                    <p className="text-xs text-slate-500">Sold by: <a href="#" className="hover:text-primary transition-colors underline">{item.seller}</a></p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-sm md:text-base">₦{(item.price * item.qty).toLocaleString()}</p>
                                                    <p className="text-xs text-slate-500">Qty: {item.qty}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <button className="flex-1 py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors text-sm">
                                        Reorder Selected
                                    </button>
                                    {order.status === 'delivered' && (
                                        <button className="flex-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm">
                                            Write a Review
                                        </button>
                                    )}
                                    {['pending', 'processing'].includes(order.status) && (
                                        <button className="flex-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:border-red-500 hover:text-red-500 transition-colors text-sm">
                                            Cancel Order
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

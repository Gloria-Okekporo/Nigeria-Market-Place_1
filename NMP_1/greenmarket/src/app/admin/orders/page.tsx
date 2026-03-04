"use client";

import { StatusPill } from "@/components/ui/StatusPill";

const MOCK_ADMIN_ORDERS = [
    { id: "GM-99201", date: "Today, 14:30", customer: "Amaka Eze", seller: "Multiple (2)", amount: 125000, status: "processing", payment: "Paystack", flag: false },
    { id: "GM-99198", date: "Today, 11:15", customer: "Chinedu Obi", seller: "Iya Ayo Fresh Foods", amount: 4500, status: "pending", payment: "Wallet", flag: false },
    { id: "GM-99150", date: "Yesterday, 16:45", customer: "Fatima Ali", seller: "Delta Catch Seafoods", amount: 18000, status: "shipped", payment: "Paystack", flag: false },
    { id: "GM-99112", date: "Mar 02, 2024", customer: "Kunle Ade", seller: "Enugu Roots & Tubers", amount: 32000, status: "delivered", payment: "Paystack", flag: false },
    { id: "GM-99088", date: "Mar 01, 2024", customer: "Ngozi Okafor", seller: "Tasty Spices Ltd", amount: 5500, status: "cancelled", payment: "Refunded", flag: true },
];

export default function AdminOrdersPage() {
    return (
        <div className="flex flex-col gap-6 h-full pb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Global Orders & Disputes</h2>
                    <p className="text-slate-500 text-sm">Monitor all platform transactions and resolve customer-seller disputes.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Today's Orders</p>
                        <h3 className="text-2xl font-black">428</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">In Processing</p>
                        <h3 className="text-2xl font-black text-amber-500">156</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <span className="material-symbols-outlined">autorenew</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Active Disputes</p>
                        <h3 className="text-2xl font-black text-red-500">5</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 cursor-pointer hover:bg-red-100 transition-colors">
                        <span className="material-symbols-outlined">warning</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col flex-1 overflow-hidden">

                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-2 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input type="text" placeholder="Search Order ID, Customer, or Seller..." className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary w-full" />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-lg">filter_list</span> Filter
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 outline-none focus:ring-1 focus:ring-primary">
                            <option>All Statuses</option>
                            <option>Active Disputes Only</option>
                            <option>Flagged Transactions</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold uppercase text-xs tracking-wider sticky top-0 z-10">
                            <tr>
                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></th>
                                <th className="p-4">Order ID & Date</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Seller(s)</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Payment</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Flags</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_ADMIN_ORDERS.map((order) => (
                                <tr key={order.id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${order.flag ? 'bg-red-50/30 dark:bg-red-500/5' : ''}`}>
                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></td>
                                    <td className="p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 dark:text-white">{order.id}</span>
                                            <span className="text-xs text-slate-500">{order.date}</span>
                                        </div>
                                    </td>
                                    <td className="p-4"><span className="hover:text-primary cursor-pointer hover:underline">{order.customer}</span></td>
                                    <td className="p-4 text-slate-500">{order.seller}</td>
                                    <td className="p-4 font-bold">₦{order.amount.toLocaleString()}</td>
                                    <td className="p-4 text-slate-500">{order.payment}</td>
                                    <td className="p-4"><StatusPill status={order.status as any} /></td>
                                    <td className="p-4">
                                        {order.flag ?
                                            <span className="material-symbols-outlined text-red-500 tooltip" title="Customer opened dispute">warning</span> :
                                            <span className="material-symbols-outlined text-slate-300">check_circle</span>
                                        }
                                    </td>
                                    <td className="p-4 text-right">
                                        {order.flag && <button className="px-3 py-1 bg-red-100 dark:bg-red-500/20 text-red-600 font-bold rounded-lg text-xs mr-2 hover:bg-red-200">View Dispute</button>}
                                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors tooltip" title="Order Details"><span className="material-symbols-outlined text-lg align-middle">visibility</span></button>
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

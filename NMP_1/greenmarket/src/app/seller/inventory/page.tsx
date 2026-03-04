"use client";

import Link from "next/link";
import { StatusPill } from "@/components/ui/StatusPill";

const MOCK_INVENTORY = [
    { id: "SB-002", name: "Fresh Scotch Bonnet Peppers", category: "Vegetables", price: 2500, stock: 50, status: "active", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzV8rxh8EdwkYfpbCqLox5AOiUYNkewLDLpOWam_fvF9pxoQnTDIR8Nm0lgFQg_2vT0YQg8jS_7e-xaOM-gevrAN_C_OGJcnWPA9XjhioHr2pag-7y9r93ekUJGsdCrdXSuOQ9_sn8nhdudfiH1FeLTNSp7sgLh-IvuzLDXsVy214rreKTzE7EaQuLmVUgUqOGS8iwpiYFG6BIGKH6fQDZAXEq30-tKXhJWv1LVhFiAVAN9rEbc5xozsbMhkeWWzEmxzxN3SVQxcw" },
    { id: "SB-003", name: "Sombo Peppers (Dried)", category: "Spices", price: 3500, stock: 12, status: "active", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhk54p4djKYdSV3gy-zJyzbfH_XeGTwiAHjFzI-oZrOtr4Bheq2-PgasQua-Ty-yDdu2_mBfOHNkMAdI_Z0V57M2mTWJVJxmx6e-TBkWt_BC0DqWujXAjejGVs9vDA2tAvi2toYItpscjwBmrork0IYQkLTTsIoPGefoeoEwCInMBJtDOiNeWMJzwlnkkP_55y3dL8nPsWMnKP3Uic6ZLsvZ2tpilV0Jb6a3QTXc2uzFaLHlWUdyZ-gjAS9bdML5mPJtDBnIrwYUE" },
    { id: "ON-015", name: "Red Onions (Large Basket)", category: "Vegetables", price: 15000, stock: 3, status: "low_stock", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4H5oNLBLU5EUmzwGddfzlRUaM7R1gicVpiFu9_9bOGCpNtb2u55Fsz2DLWYOU5atta7Si9L7SAo4QKVH5A6c6ro0ZGn9bXtAe29ne62EQzykezufKTVgepJ1-zdxS_INPqrPnlhXofGM_8QrFWArouANyTjQf8MI9V-3_E-b8W8mMIwY6cjLu2SlRbbjAGb7AK3eWXUqDfMd3UgV2ciSjNWL_LxQwS-EXojkQK0MhDgjFgdTdgdFN7uccQWMn71w2pzdVo4F4gcE" },
    { id: "UG-009", name: "Ugu Leaves (Large Bundle)", category: "Vegetables", price: 500, stock: 0, status: "out_of_stock", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkGa6U5ZnzDzZc1hQ8MDVbhyiRt20gAY0QHJz2lSKFOhFj3QnsYEF2JcKqAcpzI-4C1UXXuuzwm1UFMYh5LYyf_-kzfIf8DdRtvNIoedOMA2uJ9BI5ky3jic6CmfXLdNHvwxA8iR93_CBcbbvOLrAP_irYkJbb70Onl0o2aWv6tt4z60PCY_SjFZ0j2QzAYN07gjl4N08ahBonKmSLPdsn33diFdV4O0VslTEtEK9GKFqgV0Y6ekLzHG2ZGq476bMfhj4ENPyuUIM" }
];

export default function InventoryPage() {
    return (
        <div className="flex flex-col gap-6 max-w-[1200px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Inventory Management</h1>
                    <p className="text-slate-500 text-sm">Manage your products, pricing, and stock levels.</p>
                </div>
                <Link href="/seller/inventory/new" className="flex items-center gap-2 bg-primary text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add Product
                </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">

                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-2">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input type="text" placeholder="Search SKU or name..." className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary w-full sm:w-64" />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-lg">filter_list</span> Filter
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700">
                            Bulk Edit
                        </button>
                    </div>
                </div>

                {/* Product Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-bold uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></th>
                                <th className="p-4">Product</th>
                                <th className="p-4">SKU</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Stock</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {MOCK_INVENTORY.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-bold">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-500">{item.id}</td>
                                    <td className="p-4 text-slate-500">{item.category}</td>
                                    <td className="p-4 font-bold">₦{item.price.toLocaleString()}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <span className={item.stock < 5 ? 'text-red-500 font-bold' : ''}>{item.stock}</span>
                                            <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <StatusPill status={item.status as any} />
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2 text-slate-400">
                                            <button className="p-1 hover:text-primary transition-colors tooltip" title="Edit"><span className="material-symbols-outlined text-xl">edit_square</span></button>
                                            <button className="p-1 hover:text-slate-900 dark:hover:text-white transition-colors tooltip" title="View"><span className="material-symbols-outlined text-xl">visibility</span></button>
                                            <button className="p-1 hover:text-red-500 transition-colors tooltip" title="Delete"><span className="material-symbols-outlined text-xl">delete</span></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Setup */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
                    <span>Showing 1 to 4 of 4 products</span>
                    <div className="flex gap-1">
                        <button disabled className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                        <button disabled className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

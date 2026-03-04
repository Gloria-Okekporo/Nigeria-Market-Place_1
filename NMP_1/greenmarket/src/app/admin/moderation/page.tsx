"use client";

import { useState } from "react";

const PENDING_PRODUCTS = [
    { id: 1, title: "Fresh Scotch Bonnet Peppers", seller: "Ayo's Farm", sku: "SB-002", price: 2500, time: "2h ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzV8rxh8EdwkYfpbCqLox5AOiUYNkewLDLpOWam_fvF9pxoQnTDIR8Nm0lgFQg_2vT0YQg8jS_7e-xaOM-gevrAN_C_OGJcnWPA9XjhioHr2pag-7y9r93ekUJGsdCrdXSuOQ9_sn8nhdudfiH1FeLTNSp7sgLh-IvuzLDXsVy214rreKTzE7EaQuLmVUgUqOGS8iwpiYFG6BIGKH6fQDZAXEq30-tKXhJWv1LVhFiAVAN9rEbc5xozsbMhkeWWzEmxzxN3SVQxcw" },
    { id: 2, title: "Organic Yam Tubers", seller: "Enugu Roots", sku: "YM-115", price: 8000, time: "3h ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOrQlNEkfNJFJG0Xx-kJLGyfLWHq_uGcMiROGzFWidrySCxjxY0ZoxSYLuAud3ufpnPy1_B1ngmHMZxkjE9jsOG4DkO2jHl26E79Yzy7b2aqTI3Y_faHSyvce7OtH0VE3P-sd8k67vb6Tr53r5bmyGqB6lhC3m8WKdUbVQFV3KH3Gj2Su4vmlNR15dWjMsUyIBoI12wQ1qaM1HDwaqcjlFt0chl2Qpi5IiKsCC9seXq3QH3WabH1Z6UxcUXYT-0XuRx67Vtn7Sqw4" },
    { id: 3, title: "Smoked Catfish (Pack of 4)", seller: "Delta Catch", sku: "CF-900", price: 4500, time: "5h ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVuDlFtB6LeJk3p3pmFkZYC79ZEgLRtFcSEsROQhxjX8tOUuEHKzV1YaR8O-BwesAKyFY8eAqsgprzrV2H0b3S-gKdpR-VuBP9rffP4TCRSuPS8LMdJBNbRXVbwu-h0nWyQqdXBo3-O9naI6hnMiiZ5zfBGqBeG2Tv0qmaWSgiT4pmTkgFfDd5duGETPgr33gferS1sYUyleoY-ve6tvuKT7onXOWw-u1CjBg-bYrXZ0THvhPENXdZcB3GcFblbJ1XKA3caMpZr9s" },
    { id: 4, title: "Jollof Rice Spice Mix", seller: "Tasty Spices Ltd", sku: "JS-221", price: 1200, time: "6h ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhk54p4djKYdSV3gy-zJyzbfH_XeGTwiAHjFzI-oZrOtr4Bheq2-PgasQua-Ty-yDdu2_mBfOHNkMAdI_Z0V57M2mTWJVJxmx6e-TBkWt_BC0DqWujXAjejGVs9vDA2tAvi2toYItpscjwBmrork0IYQkLTTsIoPGefoeoEwCInMBJtDOiNeWMJzwlnkkP_55y3dL8nPsWMnKP3Uic6ZLsvZ2tpilV0Jb6a3QTXc2uzFaLHlWUdyZ-gjAS9bdML5mPJtDBnIrwYUE" },
    { id: 5, title: "Red Palm Oil 5L", seller: "Ovia Farms", sku: "PO-334", price: 7500, time: "1d ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAougUwesw-pnR5s3dM7W4CC2lXPfpJS_muHAPqzCpRC4BCoGuW03wEW2DmidCr7AYsDgA4QAlydvp72DiJ9aDJw7Z70FIfSukQ7fm_YmyPqy7M1LahESSWvNezlU3GBtOnAJugkvG2Z_Y7vhV5hROriHOcqZGu_2-gegFY61g7-YVxXxAD0nUAri5ggseKw4IoZ3kp6niTMAU91qymLFlXgmXkszQRuKMVVSlgV0uO2AENPIT5hL8Jec4j5Rt4UlanIZu9BzuYnqE" },
    { id: 6, title: "Sweet Potatoes", seller: "Benue Harvest", sku: "SP-102", price: 3000, time: "1d ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrODU-IvvLOc8Tq4eyuPzYaEijYtg12gpomNrwOMH-5fXGJzr7v0thvb1ecKm1rt262Zy76fhr3O9uMBDZ1gErM7P-TvecFoOBQK3U0UIrm_aRetRO3CbQnr78kyoqWQv4y5GDPUbE2N-smo9Kai7Qq5xhkHauGHrVeenXtv1FBTUOy2A-30KPKgK0Qz6UQGku0ObPjdeX2-WKfKBouUhcDyw9KNmLeYSiJL4Rc2QJULGWhkJfUVWhP4Ghw2F9TM6G3i39Gxh8v58" },
    { id: 7, title: "Ugu Leaves (Large Bundle)", seller: "Mama G's Garden", sku: "UG-009", price: 500, time: "2d ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkGa6U5ZnzDzZc1hQ8MDVbhyiRt20gAY0QHJz2lSKFOhFj3QnsYEF2JcKqAcpzI-4C1UXXuuzwm1UFMYh5LYyf_-kzfIf8DdRtvNIoedOMA2uJ9BI5ky3jic6CmfXLdNHvwxA8iR93_CBcbbvOLrAP_irYkJbb70Onl0o2aWv6tt4z60PCY_SjFZ0j2QzAYN07gjl4N08ahBonKmSLPdsn33diFdV4O0VslTEtEK9GKFqgV0Y6ekLzHG2ZGq476bMfhj4ENPyuUIM" },
    { id: 8, title: "Brown Honey Beans 1kg", seller: "North Grain", sku: "BN-550", price: 1800, time: "2d ago", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCck1pGTs5Y4hFL42eoFWgej3loR7jt4TTnVYNyeIrhBcj8j5sVTfCN52Lb_7--GruuwKzOXqembXG8Y3dEuIXOGGo94F2-ffJajDHiUUruntzjT704POl2JXe1i9IsXmyrfx7CYmPRtbotud6TA8IbD25ECNFmqY7iUvgOiY1OhS5ydBcJQSfu5qrhXMciU-_i3H663EI1vHFem_EAl8_X4LZzFH2195i3lOlnTXeX_CWSEMa_ucHC3vh05axTHM-2HRUetD245ac" }
];

export default function ProductModerationPage() {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const toggleSelect = (id: number) => {
        setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        if (selectedItems.length === PENDING_PRODUCTS.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(PENDING_PRODUCTS.map(p => p.id));
        }
    };

    return (
        <div className="flex flex-col gap-8 pb-24 h-full relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight mb-2">Product Moderation</h2>
                    <p className="text-slate-500 max-w-2xl">Review and manage pending product listings from sellers across Nigeria. Maintain marketplace quality standards.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-lg">filter_list</span> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-lg">sync</span> Refresh
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-hide">
                <button className="pb-3 px-1 border-b-2 border-primary text-primary text-sm font-bold whitespace-nowrap">Pending Approval (124)</button>
                <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap">Flagged for Review (12)</button>
                <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap">Recently Approved</button>
                <button className="pb-3 px-1 border-b-2 border-transparent text-slate-500 text-sm font-medium hover:text-slate-700 dark:hover:text-slate-300 whitespace-nowrap">Rejected Products</button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-8">
                {PENDING_PRODUCTS.map((product) => {
                    const isSelected = selectedItems.includes(product.id);
                    return (
                        <div key={product.id} className={`group relative bg-white dark:bg-slate-900 rounded-2xl border overflow-hidden hover:shadow-xl transition-all ${isSelected ? 'border-primary ring-1 ring-primary' : 'border-slate-200 dark:border-slate-800'}`}>

                            <div className="absolute top-2 left-2 z-10 w-6 h-6">
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => toggleSelect(product.id)}
                                    className="w-5 h-5 rounded border-slate-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-primary focus:ring-primary cursor-pointer shadow-sm"
                                />
                            </div>

                            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Hover Overlay Actions */}
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 px-6">
                                    <button className="w-full py-2.5 bg-primary text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg hover:brightness-110 transition-all transform translate-y-2 group-hover:translate-y-0 duration-200">
                                        <span className="material-symbols-outlined text-sm">check_circle</span> Approve
                                    </button>
                                    <button className="w-full py-2.5 bg-amber-400 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg hover:brightness-110 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 delay-75">
                                        <span className="material-symbols-outlined text-sm">flag</span> Flag
                                    </button>
                                    <button className="w-full py-2.5 bg-red-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs shadow-lg hover:brightness-110 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">
                                        <span className="material-symbols-outlined text-sm">delete</span> Reject
                                    </button>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1 mb-1" title={product.title}>{product.title}</h3>
                                <p className="text-xs text-slate-500 mb-3 truncate">Seller: <a href="#" className="hover:text-primary transition-colors underline">{product.seller}</a> • SKU: {product.sku}</p>
                                <div className="flex justify-between items-end">
                                    <span className="text-primary font-black text-lg">₦{product.price.toLocaleString()}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">{product.time}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Bulk Actions Fixed Bottom Bar */}
            <div className={`fixed bottom-0 left-0 right-0 lg:left-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 shadow-2xl z-20 transition-transform duration-300 ${selectedItems.length > 0 ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex items-center gap-2">
                            <input
                                id="selectAll"
                                type="checkbox"
                                checked={selectedItems.length === PENDING_PRODUCTS.length && PENDING_PRODUCTS.length > 0}
                                onChange={toggleAll}
                                className="rounded border-slate-300 text-primary focus:ring-primary w-5 h-5 cursor-pointer"
                            />
                            <label htmlFor="selectAll" className="text-sm font-bold cursor-pointer">Select All</label>
                        </div>
                        <span className="text-slate-300 dark:text-slate-700 hidden md:inline">|</span>
                        <p className="text-sm font-bold text-primary flex-1 md:flex-initial">{selectedItems.length} items selected</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-initial px-6 py-3 border-2 border-red-500/20 text-red-500 font-bold rounded-xl text-sm hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">Reject Selected</button>
                        <button className="flex-1 md:flex-initial px-6 py-3 border-2 border-amber-400/20 text-amber-600 dark:text-amber-400 font-bold rounded-xl text-sm hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors">Flag Selected</button>
                        <button className="flex-[2] md:flex-initial px-8 py-3 bg-primary text-slate-900 font-black rounded-xl text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">Approve Selected</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

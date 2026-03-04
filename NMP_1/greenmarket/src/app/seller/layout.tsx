"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function SellerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const NAV_LINKS = [
        { href: "/seller", icon: "dashboard", label: "Dashboard" },
        { href: "/seller/inventory", icon: "inventory_2", label: "Inventory" },
        { href: "/seller/orders", icon: "shopping_cart", label: "Orders" },
        { href: "/seller/reviews", icon: "star", label: "Reviews", fill: true },
        { href: "/seller/earnings", icon: "payments", label: "Earnings" },
        { href: "/seller/settings", icon: "settings", label: "Settings", bottom: true },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 group/design-root">
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-900 font-black">GM</div>
                        <div className="flex flex-col overflow-hidden">
                            <h1 className="text-sm font-bold leading-tight truncate">GreenMarket Seller</h1>
                            <p className="text-xs text-slate-500 mt-0.5 truncate">Iya Ayo Fresh Foods</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                    {NAV_LINKS.map(link => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${link.bottom ? 'mt-8' : ''
                                    } ${isActive
                                        ? 'bg-primary/20 text-slate-900 dark:text-white font-bold'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-primary/10 font-medium'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-xl ${link.fill && isActive ? 'fill-star text-primary' : ''}`}>
                                    {link.icon}
                                </span>
                                <span className="text-sm">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <button onClick={() => toast.info("Live chat coming soon")} className="w-full flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left">
                        <div className="w-8 h-8 rounded-full bg-primary/30 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">support_agent</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Seller Support</p>
                            <p className="text-xs font-semibold">Live Chat</p>
                        </div>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">
                <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between lg:hidden">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-slate-900 font-bold text-xs">GM</div>
                        <h1 className="text-sm font-bold truncate">Iya Ayo Fresh Foods</h1>
                    </div>
                    <button onClick={() => toast.info("Menu toggled")} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </header>

                <div className="p-6 md:p-8 flex-1 max-w-[1440px] w-full mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

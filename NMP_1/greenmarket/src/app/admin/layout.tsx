"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const NAV_LINKS = [
        { href: "/admin", icon: "dashboard", label: "Dashboard" },
        { href: "/admin/moderation", icon: "fact_check", label: "Product Moderation", fill: true },
        { href: "/admin/sellers", icon: "storefront", label: "Sellers" },
        { href: "/admin/buyers", icon: "group", label: "Buyers" },
        { href: "/admin/orders", icon: "shopping_bag", label: "Orders" },
        { href: "/admin/categories", icon: "category", label: "Categories" },
        { href: "/admin/settings", icon: "settings", label: "System Settings", bottom: true },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-display font-sans">

            {/* SideNavBar */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col z-20">
                <div className="p-6 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/50">
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary font-bold">potted_plant</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">GrocMod</h1>
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
                                        ? 'bg-primary/10 text-primary font-bold'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-xl ${link.fill && isActive ? 'fill-star' : ''}`}>
                                    {link.icon}
                                </span>
                                <span className="text-sm">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNrHlUIVnm0oD_xuezjpa09Efix3J6nF1eXoYjhWxZ_QYOELZVFgJf4Jzu_B9WvHgKV8OrMTV9W1BWDjcKLPQy3PR78GEq39SzFpvLwcaRYdngoRStRbKm4CijLS6Qq3UrRk5HsKGAFZcnW546_4wZYKYWgmmFHeyoPearhTFKfRPBm22CqF-_uphh_JR-z_8KqL1eGGj4Z53Zy_uZ6t0j6REsSp_4juErwJDnCh5ULcYlIEccXT5EQ1ldVXBJv7nESc7hag-84A" className="w-full h-full object-cover" alt="Admin" />
                        </div>
                        <div>
                            <p className="text-xs font-bold leading-tight">Chidi Okoro</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">Super Admin</p>
                        </div>
                    </div>
                    <button onClick={() => toast.info("Support session started")} className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all text-sm shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">support_agent</span>
                        Support
                    </button>
                </div>
            </aside>

            {/* Main Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Header */}
                <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 md:px-8 z-10 flex-shrink-0">
                    <div className="flex items-center gap-4 flex-1 max-w-xl">
                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        <div className="relative w-full hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                            <input type="text" placeholder="Search by product name, seller, or SKU..." className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none transition-shadow" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <button onClick={() => toast.info("No new notifications")} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                        </button>
                        <button onClick={() => toast.info("Settings panel opened")} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
                            <span className="material-symbols-outlined text-xl">settings</span>
                        </button>
                    </div>
                </header>

                {/* Dynamic Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50 dark:bg-slate-950 pb-24 lg:pb-8 relative">
                    <div className="max-w-[1440px] mx-auto w-full h-full">
                        {children}
                    </div>
                </div>
            </main>

        </div>
    );
}

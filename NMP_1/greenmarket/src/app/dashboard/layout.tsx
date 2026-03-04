"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        toast.success("Logged out successfully");
        router.push("/");
    };

    const NAV_LINKS = [
        { href: "/dashboard", icon: "person", label: "My Profile" },
        { href: "/dashboard/orders", icon: "local_shipping", label: "Orders & Tracking" },
        { href: "/dashboard/saved", icon: "favorite", label: "Saved Items" },
        { href: "/dashboard/chat", icon: "chat", label: "Messages" },
        { href: "/dashboard/settings", icon: "settings", label: "Settings" },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl">
                                    JD
                                </div>
                                <div>
                                    <h2 className="font-bold">John Doe</h2>
                                    <p className="text-xs text-slate-500">Buyer Account</p>
                                </div>
                            </div>

                            <nav className="flex flex-col gap-2">
                                {NAV_LINKS.map(link => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm ${isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-xl">{link.icon}</span>
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 mt-8 w-full text-left">
                                <span className="material-symbols-outlined text-xl">logout</span>
                                Logout
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

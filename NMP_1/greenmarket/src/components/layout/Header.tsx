"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { AuthButton } from "../auth/AuthButton";

export function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-3xl font-bold">eco</span>
                    <h2 className="text-xl font-black leading-tight tracking-tight">GreenMarket</h2>
                </div>
                <div className="hidden lg:flex items-center gap-6">
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/search">Browse Markets</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/#how-it-works">How it Works</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/">About Us</Link>
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-4 items-center">
                <form onSubmit={handleSearch} className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-slate-400 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                            <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input
                            className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-sm outline-none"
                            placeholder="Search markets or produce..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </form>
                <div className="flex gap-4 items-center">
                    <AuthButton />
                </div>
            </div>
        </header>
    );
}

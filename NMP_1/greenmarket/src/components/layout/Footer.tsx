"use client";

import Link from "next/link";
import { toast } from "sonner";

export function Footer() {
    const handleDeadLink = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info("This feature is coming soon!");
    };

    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-3xl font-bold">eco</span>
                        <h2 className="text-white text-xl font-black">GreenMarket</h2>
                    </div>
                    <p className="text-sm leading-relaxed">Connecting you to the heartbeat of Nigerian markets. Quality food, fair prices, delivered with love.</p>
                    <div className="flex gap-4">
                        <button onClick={handleDeadLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                            <span className="material-symbols-outlined text-xl">social_leaderboard</span>
                        </button>
                        <button onClick={handleDeadLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                            <span className="material-symbols-outlined text-xl">share</span>
                        </button>
                        <button onClick={handleDeadLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                            <span className="material-symbols-outlined text-xl">camera_alt</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">Company</h4>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-primary transition-colors" href="/about">About Us</a>
                        <a className="hover:text-primary transition-colors" href="/contact">Contact Us</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Careers</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Blog</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">Partner</h4>
                    <nav className="flex flex-col gap-2">
                        <Link className="hover:text-primary transition-colors" href="/seller-onboarding">Become a Seller</Link>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Partner Logistics</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Market Associations</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">Support</h4>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-primary transition-colors" href="/contact">Help Center</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Returns Policy</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#" onClick={handleDeadLink}>Privacy Policy</a>
                    </nav>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs">© 2024 GreenMarket Nigeria. All rights reserved.</p>
                <div className="flex gap-6 items-center">
                    <span className="text-xs uppercase font-bold tracking-tighter">Powered by</span>
                    <div className="flex items-center gap-4 grayscale opacity-50">
                        <span className="font-black italic">PAYSTACK</span>
                        <span className="font-black italic">FLUTTERWAVE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

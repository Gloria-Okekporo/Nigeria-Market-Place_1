"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="bg-primary/5 dark:bg-slate-900/50 py-16 md:py-24">
                        <div className="max-w-[1280px] mx-auto px-6 text-center">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                                Bringing the <span className="text-primary">Local Market</span> to everyone.
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-[800px] mx-auto">
                                GreenMarket was born with a simple mission: to connect every Nigerian household with high-quality, fresh produce directly from our rich local markets like Mile 12, Oyingbo, and beyond.
                            </p>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="py-20 max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
                                <div className="relative w-full aspect-square bg-center bg-cover rounded-3xl shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800"
                                    style={{ backgroundImage: 'url("/images/about-market.png")' }}>
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-6xl">storefront</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <h2 className="text-3xl md:text-4xl font-black">Empowering Farmers and <span className="text-primary">Local Vendors</span></h2>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    Nigeria is blessed with vast agricultural wealth, but getting that produce from the farm to your plate efficiently and at a fair price has always been a challenge.
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    GreenMarket provides a secure, transparent platform where verified sellers can list their products, and buyers can shop with confidence. We handle the logistics, the security, and the quality assurance so you don&apos;t have to.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-4">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-3xl font-black text-primary">500+</h3>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Verified Sellers</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-3xl font-black text-primary">24h</h3>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Delivery Target</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="bg-slate-900 text-white py-20">
                        <div className="max-w-[1280px] mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-black mb-4">Our Core Values</h2>
                                <p className="text-slate-400 text-lg">The principles that guide every transaction on GreenMarket.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl">verified_user</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Uncompromising Quality</h3>
                                    <p className="text-slate-400 leading-relaxed">We vet every seller to ensure only the freshest tubers, grains, and vegetables reach our customers.</p>
                                </div>
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl">payments</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Fair Pricing</h3>
                                    <p className="text-slate-400 leading-relaxed">By removing unnecessary middlemen, we ensure farmers get paid more and you pay less.</p>
                                </div>
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-primary/20 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl">diversity_1</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Community First</h3>
                                    <p className="text-slate-400 leading-relaxed">We are building a platform that supports the hardworking men and women in our local Nigerian markets.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-24 max-w-[1280px] mx-auto px-6 text-center">
                        <div className="bg-primary/10 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
                            <div className="relative z-10 flex flex-col items-center gap-8">
                                <h2 className="text-3xl md:text-5xl font-black max-w-[600px] leading-tight text-slate-900 dark:text-white">
                                    Ready to experience the future of <span className="text-primary text-primary-dark">Nigerian Groceries?</span>
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/search" className="bg-primary text-slate-900 font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                        Start Shopping
                                    </Link>
                                    <Link href="/seller-onboarding" className="bg-white dark:bg-slate-800 font-bold px-10 py-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        Join as a Seller
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

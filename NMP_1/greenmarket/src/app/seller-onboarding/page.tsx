"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

export default function SellerOnboardingPage() {
    const [step, setStep] = useState(1);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950">
            <Header />

            {/* Hero Banner */}
            <div className="bg-primary/10 border-b border-primary/20 py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl"></div>
                </div>
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-3xl">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Partner with Us</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Grow Your Agri-Business with GreenMarket</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Join thousands of verified Nigerian farmers and market vendors selling directly to consumers. Cut out the middlemen and increase your margins.</p>
                </div>
            </div>

            <main className="flex-1 max-w-[800px] w-full mx-auto px-6 py-12 -mt-10 relative z-20">

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">

                    {/* Progress Header */}
                    <div className="flex bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                        <div className={`flex-1 p-4 text-center text-sm font-bold border-b-2 ${step >= 1 ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`}>
                            Basic Info
                        </div>
                        <div className={`flex-1 p-4 text-center text-sm font-bold border-b-2 ${step >= 2 ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`}>
                            Market Details
                        </div>
                        <div className={`flex-1 p-4 text-center text-sm font-bold border-b-2 ${step >= 3 ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`}>
                            Verification
                        </div>
                    </div>

                    <div className="p-8 md:p-12">

                        {step === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Create your Seller Account</h2>
                                <p className="text-slate-500 mb-8">Let's start with your basic contact information.</p>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2">First Name</label>
                                            <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2">Last Name</label>
                                            <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Email Address</label>
                                        <input required type="email" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                                        <input required type="tel" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="+234..." />
                                    </div>
                                    <button type="submit" className="w-full py-4 mt-8 bg-primary text-slate-900 font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                                        Next Step
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <button onClick={() => setStep(1)} className="text-sm font-bold text-slate-400 hover:text-primary mb-6 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                                </button>
                                <h2 className="text-2xl font-bold mb-2">Business & Market Details</h2>
                                <p className="text-slate-500 mb-8">Tell us about what you sell and where your physical shop/farm is located.</p>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Store / Farm Name</label>
                                        <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="e.g. Iya Ayo Fresh Foods" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Primary Market Location</label>
                                        <select required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary">
                                            <option value="">Select a major market...</option>
                                            <option value="mile12">Mile 12 Market, Lagos</option>
                                            <option value="oyingbo">Oyingbo Market, Lagos</option>
                                            <option value="bodija">Bodija Market, Ibadan</option>
                                            <option value="wuse">Wuse Market, Abuja</option>
                                            <option value="other">Other / Independent Farm</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Primary Category</label>
                                        <select required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary">
                                            <option value="">What do you mostly sell?</option>
                                            <option value="tubers">Tubers & Grains</option>
                                            <option value="vegetables">Fresh Vegetables</option>
                                            <option value="poultry">Poultry & Meat</option>
                                            <option value="seafood">Fish & Seafood</option>
                                            <option value="spices">Oils & Spices</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="w-full py-4 mt-8 bg-primary text-slate-900 font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                                        Next Step
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <button onClick={() => setStep(2)} className="text-sm font-bold text-slate-400 hover:text-primary mb-6 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                                </button>
                                <h2 className="text-2xl font-bold mb-2">Identity Verification</h2>
                                <p className="text-slate-500 mb-8">GreenMarket requires all sellers to be verified to protect our buyers.</p>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* redirect to success */ }}>
                                    <div className="p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-4xl text-slate-400 mb-4">badge</span>
                                        <h3 className="font-bold mb-1">Upload Government ID</h3>
                                        <p className="text-xs text-slate-500 max-w-sm mb-4">NIN Slip, Driver's License, or Voter's Card. Must be clear and readable.</p>
                                        <button type="button" className="px-6 py-2 bg-slate-200 dark:bg-slate-700 font-bold rounded-lg text-sm transition-colors">Select File</button>
                                    </div>

                                    <div className="p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-4xl text-slate-400 mb-4">storefront</span>
                                        <h3 className="font-bold mb-1">Market Stall / Farm Proof</h3>
                                        <p className="text-xs text-slate-500 max-w-sm mb-4">A picture of your physical shop, stall, or farm to verify your business existence.</p>
                                        <button type="button" className="px-6 py-2 bg-slate-200 dark:bg-slate-700 font-bold rounded-lg text-sm transition-colors">Select File</button>
                                    </div>

                                    <div className="flex items-start gap-3 mt-8">
                                        <input required type="checkbox" id="terms" className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" />
                                        <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                                            I agree to the <a href="#" className="text-primary hover:underline">Seller Terms of Service</a> and confirm that all information provided is accurate and authentic.
                                        </label>
                                    </div>

                                    <a href="/seller" className="w-full flex items-center justify-center py-4 mt-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-black/10">
                                        Submit Application
                                    </a>
                                </form>
                            </div>
                        )}

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

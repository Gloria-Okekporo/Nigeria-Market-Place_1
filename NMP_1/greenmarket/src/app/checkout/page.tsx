"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function CheckoutPage() {
    const supabase = createClientComponentClient()
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState("");

    // Mock checkout summary
    const subtotal = 13000;
    const deliveryFee = 1500;
    const total = subtotal + deliveryFee;

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(s => (s < 3 ? (s + 1) as 1 | 2 | 3 : s));
    };

    const handlePaymentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment API call
        setTimeout(async () => {
            const newOrderId = `GM-${Math.floor(10000 + Math.random() * 90000)}`;

            // Attempt to send confirmation email
            try {
                await fetch('/api/email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: 'user?.email,
                        name: 'user?.email,',
                        orderId: newOrderId,
                        total: 21600
                    })
                });
            } catch (error) {
                console.error("Failed to send email", error);
            }

            setOrderId(newOrderId);
            setIsProcessing(false);
            setOrderComplete(true);
            setStep(3); // Move to step 3 after processing
        }, 2000);
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950">
            <Header />
            <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8">

                {/* Progress Tracker */}
                <div className="flex items-center justify-center max-w-2xl mx-auto mb-12">
                    <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-primary text-slate-900' : 'bg-slate-200 text-slate-500'}`}>1</div>
                        <span className="text-xs font-semibold mt-2">Delivery</span>
                    </div>
                    <div className={`flex-1 h-1 mx-2 rounded ${step >= 2 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                    <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-primary text-slate-900' : 'bg-slate-200 text-slate-500'}`}>2</div>
                        <span className="text-xs font-semibold mt-2">Payment</span>
                    </div>
                    <div className={`flex-1 h-1 mx-2 rounded ${step >= 3 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
                    <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? 'bg-primary text-slate-900' : 'bg-slate-200 text-slate-500'}`}>3</div>
                        <span className="text-xs font-semibold mt-2">Review</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Checkout Form */}
                    <div className="w-full lg:w-2/3">

                        {/* Step 1: Delivery */}
                        {step === 1 && (
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
                                <form className="space-y-6" onSubmit={handleNextStep}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2">First Name</label>
                                            <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="Enter first name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2">Last Name</label>
                                            <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="Enter last name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Phone Number</label>
                                        <input required type="tel" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="+234..." />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Delivery Address</label>
                                        <textarea required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" rows={3} placeholder="Street address, house number..."></textarea>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2">City/Area</label>
                                            <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" placeholder="e.g. Ikeja" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2">State</label>
                                            <select required className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary">
                                                <option value="">Select State</option>
                                                <option value="lagos">Lagos</option>
                                                <option value="abuja">Abuja FCT</option>
                                                <option value="rivers">Rivers</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-8">
                                        <h3 className="font-bold mb-4">Delivery Time Slot</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="cursor-pointer border-2 border-primary bg-primary/5 rounded-xl p-4 flex items-center justify-between">
                                                <div>
                                                    <p className="font-bold">Tomorrow</p>
                                                    <p className="text-sm text-slate-500">8:00 AM - 12:00 PM</p>
                                                </div>
                                                <input type="radio" name="timeslot" defaultChecked className="text-primary focus:ring-primary h-5 w-5" />
                                            </label>
                                            <label className="cursor-pointer border-2 border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-between hover:border-primary/50">
                                                <div>
                                                    <p className="font-bold">Tomorrow</p>
                                                    <p className="text-sm text-slate-500">1:00 PM - 5:00 PM</p>
                                                </div>
                                                <input type="radio" name="timeslot" className="text-primary focus:ring-primary h-5 w-5" />
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full mt-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:opacity-90 transition-opacity">
                                        Continue to Payment
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Step 2: Payment */}
                        {step === 2 && (
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <button onClick={() => setStep(1)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">arrow_back</span>
                                    </button>
                                    <h2 className="text-2xl font-bold">Payment Method</h2>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <label className="cursor-pointer border-2 border-primary bg-primary/5 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <input type="radio" name="payment" defaultChecked className="text-primary focus:ring-primary h-5 w-5" />
                                            <div>
                                                <p className="font-bold text-lg">Pay Online (Paystack/Flutterwave)</p>
                                                <p className="text-sm text-slate-500">Fast, secure, and supports all major Nigerian cards, Bank Transfers, and USSD.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 opacity-60">
                                            <span className="font-black italic px-2 bg-slate-200 dark:bg-slate-800 rounded">PAYSTACK</span>
                                            <span className="font-black italic px-2 bg-slate-200 dark:bg-slate-800 rounded">FLW</span>
                                        </div>
                                    </label>

                                    <label className="cursor-pointer border-2 border-slate-200 dark:border-slate-700 rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 opacity-60">
                                        <input type="radio" name="payment" disabled className="text-primary focus:ring-primary h-5 w-5" />
                                        <div>
                                            <p className="font-bold text-lg">Pay on Delivery (Disabled)</p>
                                            <p className="text-sm text-amber-600 dark:text-amber-400">Not available for your selected area currently.</p>
                                        </div>
                                    </label>
                                </div>

                                <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 p-4 rounded-xl flex gap-3 text-sm mb-8">
                                    <span className="material-symbols-outlined">info</span>
                                    <p>Your payment information will be securely processed. GreenMarket does not store your card details.</p>
                                </div>

                                <button onClick={handlePaymentSubmit} disabled={isProcessing} className="w-full py-4 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all text-lg shadow-lg shadow-primary/20">
                                    {isProcessing ? 'Processing...' : 'Review Order Details'}
                                </button>
                            </div>
                        )}

                        {/* Step 3: Review & Success State Simulation */}
                        {step === 3 && orderComplete && (
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center py-16">
                                <div className="w-24 h-24 bg-primary text-slate-900 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-primary/30">
                                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                                </div>
                                <h2 className="text-3xl font-black mb-4">Order Successful! 🎉</h2>
                                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto">
                                    Thank you for shopping fresh with GreenMarket.<br />Your order <span className="font-bold text-slate-900 dark:text-white">#{orderId}</span> is confirmed and we've sent a receipt to your email.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                                    <a href="/dashboard/orders" className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                                        Track Order
                                    </a>
                                    <a href="/" className="flex-1 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-colors">
                                        Continue Shopping
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24 ${step === 3 ? 'opacity-50 pointer-events-none' : ''}`}>
                            <h2 className="text-xl font-bold mb-6">Your Order</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMT55kn_y6ScrosX8EquBPlipWHTGIl-V0ER5T8eFR0dfgiAuYedXdx7AY0heYIj3t3Dt4fBAUza1k_eap3gKweoGc2aPB71bA3tBy5W5r0dH5tVamEfFSJWXTofF5Xbh6WTjxGnJv9Ly72OV8LiDLWxi0eNJWGiZwrfiQ5X-BM3r_LIy6NozL-MN4qDuSqRJptZpoNcUn0z9g4_c5tsKqCsl-3N7HvgNEdDmcsJx8VukqbhntEvyqMgZshpzIVYxKwypdTt3fPGE" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm line-clamp-1">Fresh Scotch Bonnet</p>
                                        <p className="text-xs text-slate-500">Qty: 2 • Basket</p>
                                        <p className="font-bold text-primary mt-1">₦5,000</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOrQlNEkfNJFJG0Xx-kJLGyfLWHq_uGcMiROGzFWidrySCxjxY0ZoxSYLuAud3ufpnPy1_B1ngmHMZxkjE9jsOG4DkO2jHl26E79Yzy7b2aqTI3Y_faHSyvce7OtH0VE3P-sd8k67vb6Tr53r5bmyGqB6lhC3m8WKdUbVQFV3KH3Gj2Su4vmlNR15dWjMsUyIBoI12wQ1qaM1HDwaqcjlFt0chl2Qpi5IiKsCC9seXq3QH3WabH1Z6UxcUXYT-0XuRx67Vtn7Sqw4" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm line-clamp-1">Organic Yam Tubers</p>
                                        <p className="text-xs text-slate-500">Qty: 1 • 5 Tubers</p>
                                        <p className="font-bold text-primary mt-1">₦8,000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3 mb-4">
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₦{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-500">
                                    <span>Delivery Fee</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₦{deliveryFee.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                <div className="flex justify-between items-end">
                                    <span className="font-bold">Total</span>
                                    <span className="font-black text-2xl text-primary">₦{total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

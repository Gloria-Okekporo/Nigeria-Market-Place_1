"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { useState } from "react";

const INITIAL_CART = [
    {
        id: "1",
        productId: "p1",
        title: "Fresh Scotch Bonnet Peppers",
        seller: "Ayo's Farm",
        unit: "1 Basket (2.5kg)",
        price: 2500,
        quantity: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMT55kn_y6ScrosX8EquBPlipWHTGIl-V0ER5T8eFR0dfgiAuYedXdx7AY0heYIj3t3Dt4fBAUza1k_eap3gKweoGc2aPB71bA3tBy5W5r0dH5tVamEfFSJWXTofF5Xbh6WTjxGnJv9Ly72OV8LiDLWxi0eNJWGiZwrfiQ5X-BM3r_LIy6NozL-MN4qDuSqRJptZpoNcUn0z9g4_c5tsKqCsl-3N7HvgNEdDmcsJx8VukqbhntEvyqMgZshpzIVYxKwypdTt3fPGE"
    },
    {
        id: "2",
        productId: "p2",
        title: "Organic Yam Tubers",
        seller: "Enugu Roots",
        unit: "5 Tubers",
        price: 8000,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOrQlNEkfNJFJG0Xx-kJLGyfLWHq_uGcMiROGzFWidrySCxjxY0ZoxSYLuAud3ufpnPy1_B1ngmHMZxkjE9jsOG4DkO2jHl26E79Yzy7b2aqTI3Y_faHSyvce7OtH0VE3P-sd8k67vb6Tr53r5bmyGqB6lhC3m8WKdUbVQFV3KH3Gj2Su4vmlNR15dWjMsUyIBoI12wQ1qaM1HDwaqcjlFt0chl2Qpi5IiKsCC9seXq3QH3WabH1Z6UxcUXYT-0XuRx67Vtn7Sqw4"
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const updateQuantity = (id: string, qty: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: qty } : item));
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 1500;
    const total = subtotal + deliveryFee;

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
            <Header />
            <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8">
                <h1 className="text-3xl font-black mb-8">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">shopping_cart</span>
                        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                        <p className="text-slate-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                        <a href="/search" className="px-6 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all">
                            Start Shopping
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
                                    <a href={`/product/${item.productId}`} className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </a>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="flex justify-between items-start pr-8">
                                            <div>
                                                <a href={`/product/${item.productId}`} className="font-bold hover:text-primary transition-colors text-lg line-clamp-1">{item.title}</a>
                                                <p className="text-xs text-slate-500 mb-1">Seller: {item.seller}</p>
                                                <p className="text-sm bg-slate-100 dark:bg-slate-800 inline-block px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">{item.unit}</p>
                                            </div>
                                            <div className="font-black text-primary text-right whitespace-nowrap hidden md:block">
                                                ₦{(item.price * item.quantity).toLocaleString()}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <QuantityStepper
                                                initialQuantity={item.quantity}
                                                onChange={(qty) => updateQuantity(item.id, qty)}
                                            />
                                            <div className="md:hidden font-black text-primary text-right whitespace-nowrap">
                                                ₦{(item.price * item.quantity).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-1"
                                    >
                                        <span className="material-symbols-outlined text-xl">delete</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-slate-500">
                                        <span>Subtotal ({cartItems.length} items)</span>
                                        <span className="font-medium text-slate-900 dark:text-white">₦{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500">
                                        <span>Delivery Fee (Est.)</span>
                                        <span className="font-medium text-slate-900 dark:text-white">₦{deliveryFee.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-8">
                                    <div className="flex justify-between items-end">
                                        <span className="font-bold text-lg">Total</span>
                                        <span className="font-black text-2xl text-primary">₦{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <a
                                    href="/checkout"
                                    className="w-full py-4 bg-primary text-slate-900 font-black text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 flex justify-center items-center gap-2"
                                >
                                    Proceed to Checkout <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </a>

                                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                                    <span className="material-symbols-outlined text-sm">lock</span>
                                    Secure checkout powered by Paystack & Flutterwave
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

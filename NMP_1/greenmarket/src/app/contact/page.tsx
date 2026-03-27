"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Message sent! Check your email for confirmation.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error(data.error || "Failed to send message.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex-1 bg-slate-50 dark:bg-slate-950/40 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Side: Info */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Contact Support</span>
                                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                                        How can we <span className="text-primary">help you</span> today?
                                    </h1>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[500px]">
                                        Have a question about an order, a dispute, or joining as a seller? Our team is here to support you.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-6 mt-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Email Us</h4>
                                            <p className="text-sm text-slate-500">support@greenmarket.com.ng</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Head Office</h4>
                                            <p className="text-sm text-slate-500">Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">schedule</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Working Hours</h4>
                                            <p className="text-sm text-slate-500">Mon - Sat: 8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter your name"
                                                className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-bold ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="your@email.com"
                                                className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold ml-1">Subject</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="What is this about?"
                                            className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Write your message here..."
                                            className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="bg-primary text-slate-900 font-bold py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined">send</span>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-[10px] text-slate-400">
                                        By clicking "Send Message", you agree to our privacy policy. Automated response will be sent to your email.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}

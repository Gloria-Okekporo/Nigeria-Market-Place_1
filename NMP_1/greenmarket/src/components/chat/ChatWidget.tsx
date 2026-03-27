"use client";

import { useState, useEffect, useRef } from "react";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, sender: "them", text: "Hi! How can I help you with your fresh groceries today?", time: "Just now" }
    ]);
    const [input, setInput] = useState("");
    const [autoReply, setAutoReply] = useState(true);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMsg = {
            id: Date.now(),
            sender: "me",
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMsg]);
        const sentText = input;
        setInput("");

        if (autoReply) {
            setIsTyping(true);
            setTimeout(() => {
                const responseMsg = {
                    id: Date.now() + 1,
                    sender: "them",
                    text: `Thanks for asking about ${sentText.includes('Scotch') ? 'Scotch Bonnets' : 'our fresh produce'}! A verified seller will be with you shortly.`,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, responseMsg]);
                setIsTyping(false);
            }, 2000);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
                    {/* Header */}
                    <div className="bg-primary p-6 flex justify-between items-center text-slate-900 shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <span className="material-symbols-outlined font-bold">potted_plant</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-none">GreenMarket Chat</h3>
                                <p className="text-xs font-bold opacity-70 mt-1">Direct from Vendors</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex max-w-[85%] ${msg.sender === "me" ? "self-end" : "self-start"}`}>
                                <div className={`p-4 rounded-2xl text-sm shadow-sm ${msg.sender === "me"
                                    ? "bg-primary text-slate-900 rounded-tr-sm font-medium"
                                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-sm text-slate-600 dark:text-slate-300"}`}>
                                    {msg.text}
                                    <div className={`text-[10px] mt-1 text-right ${msg.sender === "me" ? "text-primary-800 opacity-60" : "text-slate-400"}`}>
                                        {msg.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="self-start bg-slate-200 dark:bg-slate-800 px-4 py-2 rounded-full flex gap-1 items-center">
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
                        <form onSubmit={handleSend} className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about products..."
                                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                            />
                            <button type="submit" className="w-12 h-12 bg-primary text-slate-900 rounded-2xl flex items-center justify-center hover:brightness-110 transition-all shrink-0 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined font-bold ml-1">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`pointer-events-auto h-16 w-16 rounded-full bg-primary text-slate-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group/btn ${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}
            >
                <span className="material-symbols-outlined text-3xl font-bold group-hover/btn:animate-pulse">chat</span>
            </button>
        </div>
    );
}

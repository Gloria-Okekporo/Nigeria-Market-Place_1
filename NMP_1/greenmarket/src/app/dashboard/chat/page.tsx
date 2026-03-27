"use client";

import { useState } from "react";

const CHATS = [
    {
        id: "1",
        seller: "Ayo's Farm",
        avatar: "eco",
        lastMessage: "Your Scotch Bonnets have been dispatched!",
        time: "10:30 AM",
        unread: 2,
        online: true,
    },
    {
        id: "2",
        seller: "Enugu Roots",
        avatar: "nature",
        lastMessage: "Thanks for your order. We will process it shortly.",
        time: "Yesterday",
        unread: 0,
        online: false,
    },
    {
        id: "3",
        seller: "Delta Catch",
        avatar: "set_meal",
        lastMessage: "Yes, the smoked catfish is very fresh. Arrived today.",
        time: "Mon",
        unread: 0,
        online: true,
    }
];

const MESSAGES = [
    { id: 1, sender: "me", text: "Hello! Is the Scotch Bonnet very spicy?", time: "09:15 AM" },
    { id: 2, sender: "them", text: "Hi! Yes, our Ata Rodo is extremely spicy and fresh. Harvested this morning.", time: "09:20 AM" },
    { id: 3, sender: "me", text: "Perfect. I just placed an order for 2 baskets.", time: "09:25 AM" },
    { id: 4, sender: "them", text: "Received! Thank you.", time: "09:30 AM" },
    { id: 5, sender: "them", text: "Your Scotch Bonnets have been dispatched!", time: "10:30 AM" },
];

export default function ChatPage() {
    const [activeChat, setActiveChat] = useState(CHATS[0]);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState(MESSAGES);
    const [autoReply, setAutoReply] = useState(true);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const newMsg = {
            id: messages.length + 1,
            sender: "me",
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMsg]);
        const sentText = messageInput;
        setMessageInput("");

        // Auto-Response Logic
        if (autoReply) {
            setTimeout(() => {
                const responseMsg = {
                    id: messages.length + 2,
                    sender: "them",
                    text: `Hello! Thanks for your inquiry about ${sentText.includes('Scotch') ? 'Scotch Bonnets' : 'our products'}. I'm currently busy on the farm, but I'll get back to you soon!`,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages(prev => [...prev, responseMsg]);
            }, 1500);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 h-[calc(100vh-200px)] min-h-[600px] flex overflow-hidden">

            {/* Sidebar: Chat List */}
            <div className="w-full md:w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col flex-shrink-0">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold mb-4">Messages</h2>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input type="text" placeholder="Search chats..." className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {CHATS.map(chat => (
                        <button
                            key={chat.id}
                            onClick={() => setActiveChat(chat)}
                            className={`w-full p-4 flex items-center gap-4 text-left border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${activeChat.id === chat.id ? 'bg-primary/5 dark:bg-primary/10' : ''}`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">{chat.avatar}</span>
                                </div>
                                {chat.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-sm truncate">{chat.seller}</h3>
                                    <span className="text-[10px] text-slate-500 flex-shrink-0 ml-2">{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <p className={`text-xs truncate ${chat.unread ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                                        {chat.lastMessage}
                                    </p>
                                    {chat.unread > 0 && (
                                        <span className="w-5 h-5 rounded-full bg-primary text-slate-900 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col hidden md:flex min-w-0">
                {/* Chat Header */}
                <div className="h-16 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center px-6 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">{activeChat.avatar}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">{activeChat.seller}</h3>
                            <p className="text-xs text-slate-500">{activeChat.online ? 'Online' : 'Offline'}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Auto-Reply</span>
                            <button
                                onClick={() => setAutoReply(!autoReply)}
                                className={`w-10 h-5 rounded-full relative transition-colors ${autoReply ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                            >
                                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${autoReply ? 'left-6' : 'left-1'}`}></div>
                            </button>
                        </div>
                        <div className="flex gap-2 text-slate-400">
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><span className="material-symbols-outlined text-xl">call</span></button>
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><span className="material-symbols-outlined text-xl">more_vert</span></button>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-slate-50 dark:bg-slate-900/50">
                    <div className="text-center my-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full">Today</span>
                    </div>

                    {messages.map(msg => (
                        <div key={msg.id} className={`flex max-w-[80%] ${msg.sender === 'me' ? 'self-end' : 'self-start'}`}>
                            <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'me'
                                ? 'bg-primary text-slate-900 rounded-tr-sm'
                                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-sm'
                                }`}>
                                {msg.text}
                                <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-primary-800 opacity-60' : 'text-slate-400'}`}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
                    <form onSubmit={handleSend} className="flex gap-2">
                        <button type="button" className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full"><span className="material-symbols-outlined">attach_file</span></button>
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-primary"
                        />
                        <button type="submit" className="w-12 h-12 bg-primary text-slate-900 rounded-full flex items-center justify-center hover:brightness-110 transition-all flex-shrink-0">
                            <span className="material-symbols-outlined ml-1">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

"use client";

export default function SellerSettingsPage() {
    return (
        <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
            <div>
                <h1 className="text-2xl font-bold">Store Settings</h1>
                <p className="text-slate-500 text-sm">Manage your store details, operating hours, and payment preferences.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">

                {/* Profile Details */}
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold mb-6">Store Details</h2>

                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center relative group cursor-pointer text-slate-900 font-black text-3xl">
                            GM
                            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white">camera_alt</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold">Store Logo</h3>
                            <p className="text-sm text-slate-500 mb-2">JPG, GIF or PNG. 1:1 aspect ratio recommended.</p>
                            <button className="text-primary text-sm font-bold py-1.5 px-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">Change Logo</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">Store Name</label>
                                <input type="text" defaultValue="Iya Ayo Fresh Foods" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Contact Phone</label>
                                <input type="tel" defaultValue="+234 802 345 6789" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Store Description</label>
                            <textarea rows={3} defaultValue="We sell the freshest and hottest peppers, vegetables, and tubers straight from the farm to Mile 12 market. Quality guaranteed or your money back." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Primary Market Location</label>
                            <select defaultValue="mile12" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary">
                                <option value="mile12">Mile 12 Market, Lagos</option>
                                <option value="oyingbo">Oyingbo Market, Lagos</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Operating Hours</h2>
                            <p className="text-sm text-slate-500">When are you open for picking and packing orders?</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="space-y-4">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                            <div key={day} className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                                <div className="flex items-center gap-3 w-1/3">
                                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" />
                                    <span className="font-medium text-sm">{day}</span>
                                </div>
                                <div className="flex gap-2 flex-1 max-w-[240px]">
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-sm px-2 py-1 focus:ring-primary">
                                        <option>08:00 AM</option>
                                    </select>
                                    <span className="text-slate-400 self-center">-</span>
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-sm px-2 py-1 focus:ring-primary">
                                        <option>05:00 PM</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3 w-1/3 text-slate-400">
                                <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                <span className="font-medium text-sm">Sunday</span>
                            </div>
                            <div className="flex-1 max-w-[240px] text-center text-sm font-bold text-red-500 bg-red-50 dark:bg-red-500/10 py-1 rounded">
                                Closed
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button className="text-red-500 font-bold text-sm hover:underline">Deactivate Store</button>
                    <button className="w-full sm:w-auto px-8 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
}

"use client";

export default function BuyerProfilePage() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
            <h1 className="text-2xl font-bold mb-8">My Profile</h1>

            <form className="max-w-2xl space-y-6">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative group cursor-pointer">
                        <span className="text-3xl font-bold text-slate-400">JD</span>
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white">camera_alt</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">Profile Picture</h3>
                        <p className="text-sm text-slate-500 mb-2">JPG, GIF or PNG. Max size of 2MB</p>
                        <button type="button" className="text-primary text-sm font-bold hover:underline">Upload Photo</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">First Name</label>
                        <input type="text" defaultValue="John" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" defaultValue="john.doe@example.com" disabled className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed" />
                    <p className="text-xs text-slate-500 mt-1">To change your email, please contact support.</p>
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" defaultValue="+234 801 234 5678" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                    <button type="button" className="px-8 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

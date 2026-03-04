export function SellerCard({
    name,
    area,
    rating,
    verified,
}: {
    name: string;
    area: string;
    rating: number;
    verified: boolean;
}) {
    return (
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 text-2xl font-bold">
                {name.substring(0, 2).toUpperCase()}
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center gap-1">
                {name}
                {verified && (
                    <span className="material-symbols-outlined text-primary text-sm" title="Verified Seller">verified</span>
                )}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3 flex items-center gap-1 justify-center text-sm">
                <span className="material-symbols-outlined text-sm">location_on</span> {area}
            </p>
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined fill-star text-sm">star</span> {rating.toFixed(1)}
            </div>
        </div>
    );
}

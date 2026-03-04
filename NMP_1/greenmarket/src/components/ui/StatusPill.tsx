export type StatusType = 'placed' | 'confirmed' | 'packing' | 'dispatched' | 'delivered' | 'cancelled' | 'pending' | 'processing' | 'shipped' | 'active' | 'low_stock' | 'out_of_stock';

export function StatusPill({ status }: { status: StatusType }) {
    const styles: Record<StatusType, string> = {
        placed: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        confirmed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
        packing: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
        dispatched: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
        delivered: "bg-primary/20 text-primary dark:text-primary",
        cancelled: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
        pending: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
        processing: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
        shipped: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
        active: "bg-primary/20 text-primary dark:text-primary",
        low_stock: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
        out_of_stock: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
    };

    const labels: Record<StatusType, string> = {
        placed: "Placed",
        confirmed: "Confirmed",
        packing: "Packing",
        dispatched: "Dispatched",
        delivered: "Delivered",
        cancelled: "Cancelled",
        pending: "Pending",
        processing: "Processing",
        shipped: "Shipped",
        active: "Active",
        low_stock: "Low Stock",
        out_of_stock: "Out of Stock",
    };

    return (
        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${styles[status]}`}>
            {labels[status]}
        </span>
    );
}

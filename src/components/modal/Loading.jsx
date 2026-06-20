export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-950">
            <div className="relative flex items-center justify-center">
                {/* Ring */}
                <div className="absolute h-28 w-28 animate-spin rounded-full border-4 border-slate-200 border-t-emerald-600" />

                {/* Logo */}
                <img
                    src={`${import.meta.env.BASE_URL}icon-512.png`}
                    alt="Kalenderin"
                    className="h-20 w-20 rounded-2xl"
                />
            </div>
        </div>
    );
}

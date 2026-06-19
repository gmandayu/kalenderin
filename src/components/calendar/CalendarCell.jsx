export default function CalendarCell({ day, date, isToday, isSunday }) {
    if (!day) {
        return <div className="aspect-square rounded-xl" />;
    }

    return (
        <div
            title={date?.toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}
            className={`aspect-square rounded-xl border p-1.5 text-xs font-bold transition sm:rounded-2xl sm:p-3 sm:text-sm
                ${isToday ? 'border-blue-600 bg-blue-600 text-white shadow-md' : 'border-slate-100 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800'}
                ${isSunday && !isToday ? 'text-red-500' : ''}
            `}
        >
            {day}
        </div>
    );
}

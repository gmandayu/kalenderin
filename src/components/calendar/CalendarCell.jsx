import { getHijriDateShort } from '../../utils/hijriDate';

export default function CalendarCell({
    day,
    date,
    isToday,
    isSunday,
    isHoliday,
    holidayName,
    isNationalHoliday,
    onClick,
}) {
    if (!day) {
        return <div className="aspect-square rounded-xl" />;
    }

    const hijriDate = getHijriDateShort(date);

    return (
        <div
            className={`
                aspect-square rounded-xl border p-1.5 text-xs font-bold transition sm:rounded-2xl sm:p-3 sm:text-sm cursor-pointer
                ${
                    isToday
                        ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                        : isHoliday && isNationalHoliday
                          ? 'border-red-400 bg-red-100 text-red-700 dark:border-red-700 dark:bg-red-900/40 dark:text-red-200'
                          : isHoliday
                            ? 'border-red-200 bg-red-50 text-red-500 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-400'
                            : isSunday
                              ? 'border-slate-100 bg-white text-red-500 hover:border-red-200 hover:bg-red-50 dark:border-slate-800 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-slate-800'
                              : 'border-slate-100 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800'
                }
            `}
            title={
                holidayName ||
                date?.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })
            }
            onClick={onClick}
        >
            <span>{day}</span>

            {hijriDate && (
                <p className="mt-1 truncate text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    {hijriDate}
                </p>
            )}

            {holidayName && (
                <p className="mt-1 hidden truncate text-[10px] font-medium sm:block">
                    {holidayName}
                </p>
            )}
        </div>
    );
}

import CalendarCell from './CalendarCell';

const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export default function CalendarGrid({ currentDate }) {
    const today = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarDays = [...Array.from({ length: firstDayIndex }, () => null), ...Array.from({ length: totalDays }, (_, index) => index + 1)];

    return (
        <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-5 md:p-6">
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 sm:gap-2 sm:text-sm">
                {dayNames.map((day) => (
                    <div key={day} className="py-2">
                        {day}
                    </div>
                ))}
            </div>

            <div className="mt-2 grid grid-cols-7 gap-1 sm:mt-4 sm:gap-2">
                {calendarDays.map((day, index) => {
                    if (!day) {
                        return <CalendarCell key={`empty-${index}`} />;
                    }
                    const date = new Date(year, month, day);
                    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
                    const isSunday = date.getDay() === 0;
                    return <CalendarCell key={`${year}-${month}-${day}`} day={day} date={date} isToday={isToday} isSunday={isSunday} />;
                })}
            </div>
        </div>
    );
}

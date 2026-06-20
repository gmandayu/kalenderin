import { ChevronLeft, ChevronRight } from 'lucide-react';

const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export default function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }) {
    return (
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg">
            <button
                onClick={onPreviousMonth}
                className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-500 dark:hover:text-gray-300"
            >
                <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl font-bold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
                onClick={onNextMonth}
                className="absolute right-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-500 dark:hover:text-gray-300"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

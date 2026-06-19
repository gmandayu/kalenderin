import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CalendarGrid from '../components/calendar/CalendarGrid';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export default function Home() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100" style={{ height: 'auto !important' }}>
            <Navbar />
            <section className="mx-auto max-w-6xl px-4 py-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold md:text-5xl">Kalenderin hari kamu.</h1>
                </div>
                <div className="mb-4 rounded-r-lg border-l-4 border-gray-300 bg-gray-50 py-3 pl-4 pr-4 dark:border-gray-600 dark:bg-gray-900/50">
                    <p className="mt-3 max-w-2xl text-slate-600">Cek tanggal merah, kalender hijriyah, weton Jawa, dan hari penting Indonesia dalam satu tempat.</p>
                </div>
            </section>
            <section className="mx-auto max-w-6xl px-4 py-0">
                <div className="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg">
                    <button
                        onClick={handlePreviousMonth}
                        className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-500 dark:hover:text-gray-300"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <h2 className="text-xl font-bold">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <button
                        onClick={handleNextMonth}
                        className="absolute right-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all hover:border-gray-400 hover:text-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:border-gray-500 dark:hover:text-gray-300"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                <CalendarGrid currentDate={currentDate} />
            </section>
            <Footer />
        </main>
    );
}

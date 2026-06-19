import { useEffect, useRef, useState } from 'react';
import CalendarGrid from '../components/calendar/CalendarGrid';
import CalendarHeader from '../components/calendar/CalendarHeader';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { getHolidays } from '../services/HolidayApi';

export default function Home() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [holidays, setHolidays] = useState([]);
    const [isLoadingHolidays, setIsLoadingHolidays] = useState(false);
    const [holidayError, setHolidayError] = useState(null);

    const year = currentDate.getFullYear();
    const holidayCacheRef = useRef({});

    useEffect(() => {
        let isMounted = true;
        async function fetchHolidays() {
            try {
                setIsLoadingHolidays(true);
                setHolidayError('');

                if (holidayCacheRef.current[year]) {
                    setHolidays(holidayCacheRef.current[year]);
                    return;
                }

                const data = await getHolidays(year);

                holidayCacheRef.current[year] = data;
                if (isMounted) {
                    setHolidays(data);
                }
            } catch (error) {
                if (isMounted) {
                    setHolidayError(error.message);
                    setHolidays([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoadingHolidays(false);
                }
            }
        }

        fetchHolidays();

        return () => {
            isMounted = false;
        };
    }, [year]);

    const handlePreviousMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };
    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    return (
        <main
            className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
            style={{ height: 'auto !important' }}
        >
            <Navbar />
            <section className="mx-auto max-w-6xl px-4 py-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        Kalenderin hari kamu.
                    </h1>
                </div>
                <div className="mb-4 rounded-r-lg border-l-4 border-gray-300 bg-gray-50 py-3 pl-4 pr-4 dark:border-gray-600 dark:bg-gray-900/50">
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Cek tanggal merah, kalender hijriyah, weton Jawa, dan
                        hari penting Indonesia dalam satu tempat.
                    </p>
                </div>
            </section>
            <section className="mx-auto max-w-6xl px-4 py-0">
                <CalendarHeader
                    currentDate={currentDate}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                />
                {isLoadingHolidays && (
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        Memuat data hari libur...
                    </p>
                )}
                {holidayError && (
                    <p className="mt-4 text-sm text-red-500">{holidayError}</p>
                )}

                <div className="mt-6">
                    <CalendarGrid
                        currentDate={currentDate}
                        holidays={holidays}
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}

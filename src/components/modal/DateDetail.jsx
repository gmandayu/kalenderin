import { X } from 'lucide-react';
import { useEffect } from 'react';
import { getHijriDate } from '../../utils/hijriDate';

export default function DateDetailModal({ selectedDate, onClose }) {
    useEffect(() => {
        if (!selectedDate) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [selectedDate]);

    if (selectedDate === null) return null;

    const { date, holidayName, isHoliday, isNationalHoliday } = selectedDate;

    const formattedDate = new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric',
    });

    const hijriDate = getHijriDate(selectedDate?.date);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-blue-600">Detail Hari</p>
                        <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                            {formattedDate}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                        <p className="text-slate-500 dark:text-slate-400">Status</p>
                        <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                            {isHoliday
                                ? isNationalHoliday
                                    ? 'Hari Libur Nasional'
                                    : 'Cuti Bersama'
                                : 'Hari biasa'}
                        </p>
                    </div>

                    {holidayName && (
                        <div className="rounded-2xl bg-red-50 p-4 text-red-700 dark:bg-red-950/30 dark:text-red-300">
                            <p className="text-red-500 dark:text-red-400">Hari Libur</p>
                            <p className="mt-1 font-semibold">{holidayName}</p>
                        </div>
                    )}
                </div>
                <div className="space-y-3 text-sm mt-3">
                    <div className="rounded-2xl bg-emerald-50 p-4">
                        <p className="mb-2 text-sm text-emerald-600">Hijriah</p>
                        <p className="font-semibold text-emerald-900">{hijriDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

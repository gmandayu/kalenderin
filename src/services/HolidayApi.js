

const BASE_URL = import.meta.env.VITE_HOLIDAY_API_URL;

export async function getHolidays(year) {
    try {
        const response = await fetch(`${BASE_URL}?year=${year}`);

        if (!response.ok) {
            throw new Error('Gagal mengambil data hari libur.');
        }

        const data = await response.json();
        const holidays = Array.isArray(data) ? data : [];

        return {
            holidays,
            warning:
                holidays.length === 0
                    ? `Data SKB 3 Menteri Tahun ${year} belum dirilis pemerintah. Halaman akan diperbarui otomatis setelah SKB resmi terbit.`
                    : '',
        };
    } catch (error) {
        return {
            holidays: [],
            warning: error.message || `Data hari libur tahun ${year} belum tersedia.`,
        };
    }
}

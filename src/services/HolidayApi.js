const BASE_URL = 'https://libur.deno.dev/api';

export async function getHolidays(year) {
    const response = await fetch(`${BASE_URL}?year=${year}`);
    if (!response.ok) {
        throw new Error('Gagal mengambil data hari libur.');
    }
    return response.json();
};

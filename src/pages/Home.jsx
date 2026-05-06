import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CalendarGrid from '../components/calendar/CalendarGrid';

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
			<Navbar />

			<section className="mx-auto max-w-6xl px-4 py-8">
				<div className="mb-8">
					<p className="mb-2 text-sm font-semibold text-blue-600">Kalender Indonesia</p>
					<h1 className="text-3xl font-bold md:text-5xl">Kalenderin hari kamu.</h1>
					<p className="mt-3 max-w-2xl text-slate-600">Cek tanggal merah, kalender hijriyah, weton Jawa, dan hari penting Indonesia dalam satu tempat.</p>
				</div>

				<CalendarGrid />
			</section>

			<Footer />
		</main>
	);
}

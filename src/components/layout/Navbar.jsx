import { CalendarDays } from 'lucide-react';

export default function Navbar() {
	return (
		<header className="border-b bg-white">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
				<a href="/" className="text-xl font-bold text-blue-600">
					<CalendarDays className="h-7 w-7" />
					Kalenderin
				</a>
				<div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
					<a href="/" className="hover:text-blue-600">
						<CalendarDays className="h-5 w-5" />
						Kalender
					</a>
					<a href="#libur" className="hover:text-blue-600">
						Tanggal Merah
					</a>
					<a href="#weton" className="hover:text-blue-600">
						Weton
					</a>
				</div>
			</nav>
		</header>
	);
}

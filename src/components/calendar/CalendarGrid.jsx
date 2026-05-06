export default function CalendarGrid() {
	return (
		<section id="kalender" className="rounded-3xl border bg-white p-4 shadow-sm">
			<div className="mb-4 flex items-center justify-between">
				<button className="rounded-xl border px-4 py-2 text-sm">Sebelumnya</button>

				<h2 className="text-lg font-bold">Mei 2026</h2>

				<button className="rounded-xl border px-4 py-2 text-sm">Berikutnya</button>
			</div>

			<div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-slate-500">
				{['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
					<div key={day} className="py-2">
						{day}
					</div>
				))}
			</div>

			<div className="mt-2 grid grid-cols-7 gap-2">
				{Array.from({ length: 31 }).map((_, index) => (
					<div key={index} className="min-h-20 rounded-2xl border border-slate-100 p-2 text-sm hover:bg-slate-50">
						<span className="font-bold">{index + 1}</span>
					</div>
				))}
			</div>
		</section>
	);
}

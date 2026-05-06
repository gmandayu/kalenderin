import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [theme, setTheme] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [theme]);

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
			aria-label="Toggle dark mode">
			{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	);
}

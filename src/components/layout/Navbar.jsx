import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <a href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
                    <img
                        src={`${import.meta.env.BASE_URL}icon-512.png`}
                        alt="Kalenderin"
                        className="h-8 w-8 rounded-lg"
                    />

                    <span>Kalenderin</span>
                </a>

                <div className="flex items-center gap-4">
                    {/* <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
                        <a href="#kalender" className="hover:text-blue-600">
                            Kalender
                        </a>
                        <a href="#libur" className="hover:text-blue-600">
                            Tanggal Merah
                        </a>
                        <a href="#weton" className="hover:text-blue-600">
                            Weton
                        </a>
                    </div> */}

                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

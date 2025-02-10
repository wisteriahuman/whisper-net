import Link from 'next/link';

export default function Navigation() {
    return (
        <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
            <Link href="/" className="text-4xl font-bold text-red-300">
                Whisper-Net
            </Link>
            <nav className="ml-auto">
                <Link href="/about" className="mr-5 text-black">
                    About
                </Link>
            </nav>
        </header>
    );
}
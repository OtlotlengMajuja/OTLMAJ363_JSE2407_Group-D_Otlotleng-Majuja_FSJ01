import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-green-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="font-['Anek_Devanagari'] text-3xl text-white">Shopporium</span>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="text-white hover:text-green-200 transition-colors duration-300">Home</Link></li>
                        <li><Link href="/about" className="text-white hover:text-green-200 transition-colors duration-300">About Us</Link></li>
                        <li><Link href="/cart" className="text-white hover:text-green-200 transition-colors duration-300">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

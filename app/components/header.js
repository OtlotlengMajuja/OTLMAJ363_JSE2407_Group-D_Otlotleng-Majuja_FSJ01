import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="font-['Anek_Devanagari'] text-3xl text-white">Shopporium</span>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="text-white hover:text-indigo-200 transition-colors duration-300">Home</Link></li>
                        <li><Link href="/categories" className="text-white hover:text-indigo-200 transition-colors duration-300">Categories</Link></li>
                        <li><Link href="/cart" className="text-white hover:text-indigo-200 transition-colors duration-300">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

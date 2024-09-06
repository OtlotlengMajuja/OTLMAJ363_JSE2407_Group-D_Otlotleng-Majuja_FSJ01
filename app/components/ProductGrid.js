import Link from 'next/link';

export default function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="border p-4 rounded shadow hover:shadow-md transition-shadow">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                </Link>
            ))}
        </div>
    );
}
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="block">
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    );
}
import { getProductById } from '@/app/lib/api';
import Link from 'next/link';
import ImageGallery from '@/app/components/gallery';
import Reviews from '@/app/components/reviews';

export default async function ProductPage({ params }) {
    const { id } = params;
    let product;
    let error;

    try {
        product = await getProductById(id);
    } catch (error) {
        error = error.message;
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">Error: {error}</div>;
    }

    return (
        <div className="py-12">
            <Link href="/" className="flex items-center space-x-2 text-green-600 hover:text-green-800 mb-8 transition-colors duration-300">
                <button className='bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors duration-300 mt-4 ml-2'>Back to products</button>
            </Link>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        {product.images && product.images.length > 0 ? (
                            <ImageGallery images={product.images} />
                        ) : (
                            <div className="p-4">No images available</div>
                        )}
                    </div>
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-4 text-black">{product.title}</h2>
                        <p className="text-black mb-4">{product.description}</p>
                        <p className="text-xl font-semibold text-green-800 mb-4">R{product.price.toFixed(2)}</p>
                        <p className="font-semibold text-black mb-4">Category: {product.category}</p>
                        <div className="mb-4">
                            {product.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-green-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-black mb-2">Rating: {product.rating} / 5</p>
                        <p className="text-sm text-black mb-4">
                            Stock: {product.stock}
                            {product.stock > 0 ? (
                                <span className="text-green-600 ml-2">(In Stock)</span>
                            ) : (
                                <span className="text-red-600 ml-2">(Out of Stock)</span>
                            )}
                        </p>
                        <button className="bg-black hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <Reviews reviews={product.reviews} />
            </div>
        </div>
    );
}

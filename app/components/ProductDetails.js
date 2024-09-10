"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetails({ product }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % product.images.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div>
            <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Back to Products
            </Link>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                    <Image
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        className="w-full h-96 object-cover rounded"
                    />
                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>
                <div>
                    <p className="text-2xl font-bold mb-2">${product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="mb-2"><strong>Category:</strong> {product.category}</p>
                    <p className="mb-2"><strong>Tags:</strong> {product.tags.join(', ')}</p>
                    <p className="mb-2"><strong>Rating: </strong>{product.rating}</p>
                    <p className="mb-4"><strong>Stock:</strong> {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</p>

                    <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                    {product.reviews.map((review, index) => (
                        <div key={index} className="border-t py-2">
                            <p><strong>{review.name}</strong> - {new Date(review.date).toLocaleDateString()}</p>
                            <p>Rating: {review.rating} / 5</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
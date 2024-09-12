'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ product }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % product.images.length
        );
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <Link href={`/product/${product.id}`}>
                <div className="relative">
                    <Image
                        src={product.images[currentImageIndex] || product.thumbnail}
                        alt={product.title}
                        width={250}
                        height={250}
                        objectFit="cover"
                    />
                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                            >
                                &#8250;
                            </button>
                        </>
                    )}
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-indigo-800 mb-2 truncate">{product.title}</h2>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
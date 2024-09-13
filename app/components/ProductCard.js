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
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                    <h2 className="text-xl font-bold mb-4 text-black">{product.title}</h2>
                    <p className="inline-block font-semibold bg-green-700 rounded-full px-3 py-1 text-sm text-white mr-2 mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-black">R{product.price.toFixed(2)}</span>
                        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors duration-300 mt-4 ml-2">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
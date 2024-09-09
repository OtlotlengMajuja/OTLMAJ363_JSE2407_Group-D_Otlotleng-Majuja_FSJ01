import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
                    <p className="text-xl mb-2">${product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="mb-2">Category: {product.category}</p>
                    <p>Rating: {product.rating}</p>
                </div>
            </div>
        </div>
    );
}
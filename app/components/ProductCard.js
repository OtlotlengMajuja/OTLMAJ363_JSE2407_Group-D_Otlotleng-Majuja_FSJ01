import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCard({ product }) {
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
        <div className="border p-4 rounded shadow hover:shadow-md transition-shadow">
            <div className="relative">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-2"
                />
                {product.images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); prevImage(); }}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-r"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextImage(); }}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-l"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
    );
}
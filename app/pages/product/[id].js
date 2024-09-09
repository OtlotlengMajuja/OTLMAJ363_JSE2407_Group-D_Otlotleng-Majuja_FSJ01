import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductById } from '@/app/lib/api';
import Image from 'next/image';

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            async function fetchProduct() {
                try {
                    const productData = await getProductById(id);
                    setProduct(productData);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
            fetchProduct();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return null;

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
            <Image src={product.thumbnail} alt={product.title} />
        </div>
    );
}
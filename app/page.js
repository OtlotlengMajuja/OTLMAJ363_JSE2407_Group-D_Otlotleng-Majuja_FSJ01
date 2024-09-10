'use client'

import { useState, useEffect } from 'react';
import { getProducts } from '@/app/lib/api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 20;
  const totalPages = Math.ceil(totalProducts / limit);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const productsData = await getProducts(currentPage, limit);
        setProducts(productsData.products);
        setTotalProducts(productsData.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">E-commerce Store</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductGrid products={products} />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}

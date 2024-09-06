import { Suspense } from 'react';
import Link from 'next/link';
import { getProducts } from '@/app/lib/api';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  let products = [];
  let error = null;

  try {
    products = await getProducts(page);
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">E-commerce Store</h1>
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid products={products} />
          </Suspense>
          <Pagination currentPage={page} />
        </>
      )}
    </div>
  );
}
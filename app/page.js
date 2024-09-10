import { Suspense } from 'react';
import { getProducts } from '@/app/lib/api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 20;
  let products = [];
  let totalProducts = 0;
  let error = null;

  try {
    products = await getProducts(page);
    products = response.products;
    totalProducts = response.total;
  } catch (err) {
    error = err.message;
  }

  const totalPages = Math.ceil(totalProducts / limit);

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
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}
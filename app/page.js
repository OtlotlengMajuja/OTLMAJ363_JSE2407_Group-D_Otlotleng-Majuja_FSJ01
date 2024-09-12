import { fetchProducts } from './api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  let products;
  let error;

  try {
    products = await fetchProducts(page);
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return <div className="text-red-600 text-center p-4 bg-red-100 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">Discover Amazing Products</h1>
      <ProductGrid products={products} />
      <Pagination currentPage={page} hasMore={products.length === 20} />
    </div>
  );
}
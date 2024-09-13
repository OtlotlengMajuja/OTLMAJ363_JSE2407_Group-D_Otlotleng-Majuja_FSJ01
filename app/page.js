import { getProducts } from './lib/api';
import ProductGrid from './components/productGrid';
import Pagination from './components/pagination';

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  let products;
  let error;

  try {
    products = await getProducts(page);
  } catch (error) {
    error = error.message;
  }

  if (error) {
    return <div className="text-red-600 text-center p-4 bg-red-100 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <ProductGrid products={products} />
      <Pagination currentPage={page} hasMore={products.length === 20} />
    </div>
  );
}

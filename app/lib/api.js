const API_BASE_URL = 'https://next-ecommerce-api.vercel.app/';

export async function getProducts(options = {}) {
    const {
        sortBy = 'id',
        order = 'asc',
        limit = 20,
        skip = 0,
        category,
        search
    } = options;

    const queryParams = new URLSearchParams({
        sortBy,
        order,
        limit: limit.toString(),
        skip: skip.toString(),
        ...(category && { category }),
        ...(search && { search })
    });

    const response = await fetch(`${API_BASE_URL}/products?${queryParams}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
}

export async function getProductById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
}

export async function getCategories() {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
}
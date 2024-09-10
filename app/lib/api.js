const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

export async function getProducts(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return {
        products: data.products,
        total: data.total
    };
}

export async function getProductById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    const product = await response.json();

    product.tags = ['electronics', 'gadget']; // Example tags
    product.stock = Math.floor(Math.random() * 100); // Random stock between 0 and 99
    product.reviews = [
        {
            name: 'John Doe',
            date: '2023-09-15',
            rating: 4,
            comment: 'Great product, works as expected!'
        },
        {
            name: 'Jane Smith',
            date: '2023-10-02',
            rating: 5,
            comment: 'Excellent quality and fast shipping.'
        }
    ];

    return product;
}

export async function getCategories() {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
}
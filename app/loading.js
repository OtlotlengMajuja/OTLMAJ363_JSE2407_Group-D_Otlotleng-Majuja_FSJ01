export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-green-800 border-solid"></div>
                <div className="animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </div>
            </div>
            <p className="mt-6 text-green-800 text-xl font-semibold animate-pulse">Loading products...</p>
        </div>
    );
}

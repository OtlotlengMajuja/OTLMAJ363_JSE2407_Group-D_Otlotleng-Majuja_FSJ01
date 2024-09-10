import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
    const maxVisiblePages = 5;
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="flex justify-center space-x-4 my-4">
            {currentPage > 1 && (
                <Link href={`/?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Previous
                </Link>
            )}

            {startPage > 1 && (
                <>
                    <Link href="/?page=1" className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                        1
                    </Link>
                    {startPage > 2 && <span className="px-2">...</span>}
                </>
            )}

            {pageNumbers.map((number) => (
                <Link
                    key={number}
                    href={`/?page=${number}`}
                    className={`px-3 py-2 rounded transition-colors ${number === currentPage
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    {number}
                </Link>
            ))}

            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-2">...</span>}
                    <Link href={`/?page=${totalPages}`} className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                        {totalPages}
                    </Link>
                </>
            )}

            {currentPage < totalPages && (
                <Link href={`/?page=${currentPage + 1}`} className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Next
                </Link>
            )}
        </div>
    );
}
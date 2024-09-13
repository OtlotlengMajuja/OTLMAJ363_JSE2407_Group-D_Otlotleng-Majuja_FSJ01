export default function Reviews({ reviews }) {
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Customer reviews:</h2>
            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold text-lg text-green-700">{review.reviewerName}</span>
                            <span className="text-sm text-green-600">{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="text-black-500 mr-2">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <span className="text-green-700">{review.rating} / 5</span>
                        </div>
                        <p className="text-black">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

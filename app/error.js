'use client';

export default function Error({ error, reset }) {
    return (
        <div className="text-center">
            <h2 className="font-bold">Something went wrong..</h2>
            <p>{error.message}</p>
            <button onClick={reset} className="font-bold">Please try again later</button>
        </div>
    );
}
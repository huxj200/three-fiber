import Link from 'next/link';

import React from 'react';

export default function ProductItem({ product }) {
    return (
        <div className="card">
            <Link href={`/product/${product.attributes.name}`}>
                <a>
                    <img
                        src={product.attributes.image}
                        alt={product.attributes.name}
                        className="rounded shadow w-42 h-24"
                    />
                </a>
            </Link>
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.attributes.name}`}>
                    <a>
                        <h2 className="text-lg">{product.attributes.name}</h2>
                    </a>
                </Link>
            </div>
        </div>
    );
}
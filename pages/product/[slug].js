import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import ShowModel from '../../components/Model/showModel';

import data from '../../utils/data';

export default function ModelScreen() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.data.find((x) => x.attributes.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }

    return (
        <div>
            <header>
                <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                    <Link href="/">
                        <a className="text-lg font-bold">{'主目录'}</a>
                    </Link>
                    <div>
                        <Link href="/login">
                            <a className="p-2">Login</a>
                        </Link>
                    </div>
                </nav>
            </header>
            <h1>{product.attributes.name}</h1>
            <ShowModel>{{ modelUrn: product.attributes.modelurn }}</ShowModel>

        </div>
    )
}

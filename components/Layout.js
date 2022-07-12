import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Layout(props) {
    const data1 = data.data;

    // console.log(data1);

    return (
        <>

            <Head>
                <title>{props.children.title}</title>
            </Head>


            <div className='flex min-h-screen flex-col justify-between'>
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

                <main className="container m-auto mt-4 px-4">
                    <>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {data1.map((product) => (
                                <ProductItem product={product} key={product.id}></ProductItem>
                            ))}
                        </div>
                    </>
                </main>

                <footer className="flex h-10 justify-center items-center shadow-inner">
                    footer
                </footer>

            </div>

        </>
    )
}

import Head from 'next/head'
import React from 'react'
import Link from 'next/link';

export default function Layout(props) {
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
                    main
                </main>

                <footer className="flex h-10 justify-center items-center shadow-inner">
                    footer
                </footer>

            </div>

        </>
    )
}

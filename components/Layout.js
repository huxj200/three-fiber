import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head'
import React from 'react'
import Link from 'next/link';
import Cookies from 'js-cookie'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';


export default function Layout({ title, children, isshow }) {

    const { status, data: session } = useSession();

    const data1 = data.data;
    // console.log(data1);
    const logoutClickHandler = () => {
        Cookies.remove('cart')
        signOut({ callbackUrl: '/' })
    }

    return (
        <>

            <Head>
                <title>{title}</title>
            </Head>

            <ToastContainer position='bottom-center' limit={1} />

            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                        <Link href="/">
                            <a className="text-lg font-bold">{'主目录'}</a>
                        </Link>
                        <div>
                            {status === 'loading' ? (
                                'Loading'
                            ) : session?.user ?
                                (
                                    <a className="dropdown-link" href="#" onClick={logoutClickHandler}>
                                        Logout{" "}
                                    </a>
                                )
                                : <></>}

                            {status === 'loading' ? (
                                'Loading'
                            ) : session?.user ? (
                                session.user.name
                            ) : (
                                <Link href="/login">
                                    <a className="p-2"> Login</a>
                                </Link>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="container m-auto mt-4 px-4">
                    <>
                        {children}
                        {isshow ?
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                {data1.map((product) => (
                                    <ProductItem product={product} key={product.id}></ProductItem>
                                ))}
                            </div>
                            : <></>}
                    </>
                </main>

                <footer className="flex h-10 justify-center items-center shadow-inner">
                    footer
                </footer>

            </div>

        </>
    )
}

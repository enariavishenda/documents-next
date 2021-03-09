import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Demo</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="ssr,next,react,javascript" />
                <meta name="description" content="this is test page application" />
            </Head>

            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/documents'}><a>Documents</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            
            nav a {
           color: #ffff;
           text-decoration: none
            }
            
            main {
            margin-top: 60px;
            padding: 1rem;
                `}
            </style>
        </>
    )
}
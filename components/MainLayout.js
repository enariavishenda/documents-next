import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Demo</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="ssr,next,react,javascript"/>
                <meta name="description" content="this is test page application"/>
            </Head>

            <div className="container">
                <nav>
                    <Link href={'/'}><a>Home</a></Link>
                    <Link href={'/about'}><a>About</a></Link>
                    <Link href={'/documents'}><a>Documents</a></Link>
                </nav>
                <div className="items">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
            <footer>
                <a href="https://github.com/enariavishenda">Enaria Vishenda, mattco@mail.ru</a>
            </footer>
        </>
    )
}
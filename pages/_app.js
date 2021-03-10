import '../styles/main.scss'
import "../styles/responcive.scss"

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
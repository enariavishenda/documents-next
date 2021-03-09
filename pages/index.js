import Link from "next/link";
import {MainLayout} from "../components/MainLayout";

export default function Home() {
    return (
        <MainLayout title={'Home Page'}>
            <h1>Hello Next.js</h1>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/documents"><a>Documents</a></Link></p>
        </MainLayout>
    )
}

import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import Router from "next/router";

export default function Documents({document}) {
    return (
        <MainLayout title={'Documents Page'}>
            <h1>Documents Page</h1>
            <ul>
                {document.map(doc => (
                        <li key={doc.id}>
                            <Link href={`/document/[id]`} as={`/document/${doc.id}`}>
                                <a>
                                    {doc.displayName}
                                </a>
                            </Link>
                        </li>
                    )
                )}
            </ul>

        </MainLayout>
    )

}

Documents.getInitialProps = async () => {
    const res = await fetch('http://localhost:4200/document')
    const document = await res.json()

    return {
        document
    }
}
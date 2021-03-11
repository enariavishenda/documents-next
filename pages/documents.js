import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {useState, useEffect} from 'react';

export default function Documents({document: reqDoc}) {

    const [document, setDocs] = useState(reqDoc)

    useEffect(() => {
        async function load () {
            const res = await fetch('http://localhost:4200/document')
            const data = await res.json()
            setDocs(data)
        }
        if (!reqDoc) {
            load()
        }
    }, [])

    if (!document) {
        return (
            <MainLayout>
                <p>
                    Loading...
                </p>
            </MainLayout>
        )
    }

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

//combine frontend-backend
Documents.getInitialProps = async ({req}) => {
    if (!req) {
        return {document: null}
    }
    const res = await fetch(`${process.env.api}/document`)
    const document = await res.json()

    return {
        document
    }
}
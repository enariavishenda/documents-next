import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {useRouter} from "next/router";
import Doc from "./document/[id]";

Modal.setAppElement("#__next")

export default function Documents({document: reqDoc}) {

    const [document, setDocs] = useState(reqDoc)
    const router = useRouter()

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
                            <Link
                                href={`/documents/?id=${doc.id}`}
                                as={`/document/${doc.id}`}>
                                <a>
                                    {doc.displayName}
                                </a>
                            </Link>
                        </li>
                    )
                )}
            </ul>
            <Modal isOpen={!!router.query.id}
                   onRequestClose={() => router.push("/documents")}
                   className="Modal"
                   >
                <Doc id={router.query.id}/>
            </Modal>
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
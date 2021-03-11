import {MainLayout} from "../../components/MainLayout";
import Router, {useRouter} from "next/router";
import {useState, useEffect} from 'react';

export default function Doc({document: reqDocs}) {

    const [document, setDocs] = useState(reqDocs)
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/document/${router.query.id}`)
            const data = await res.json()
            setDocs(data)
        }
        if (!reqDocs) {
            load()
        }
    }, [])

    if (!document) {
        return (
            <MainLayout>
                <p>
                    ...Loading
                </p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>
                {document.displayName}
            </h1>
            <li>
                {document.docDate}
            </li>
            <button onClick={() => Router.push('/documents')}>Go back</button>
        </MainLayout>
    )
}
//ssr
export async function getServerSideProps({query}) {
    const res = await fetch(`http://localhost:4200/document/${query.id}`)
    const document = await res.json()
    return {props: {document}}
}
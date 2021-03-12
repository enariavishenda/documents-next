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
            <p className="from-modal">
                ...Loading
            </p>
        )
    }

    return (
        <div className="from-modal">
            <h3>
                {document.displayName}
            </h3>
            <li>
                {document.description}
            </li>
            <li>
                {document.docDate}
            </li>
            <li>
                {document.direction}
            </li>
            <button onClick={() => Router.push('/documents')}>Go back</button>
        </div>
    )
}

//ssr
export async function getServerSideProps({query}) {
    const res = await fetch(`http://localhost:4200/document/${query.id}`)
    const document = await res.json()
    return {props: {document}}
}
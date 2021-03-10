import {MainLayout} from "../components/MainLayout";

export default function Documents({document}) {
    return (
        <MainLayout title={'Documents Page'}>
            <h1>Documents Page</h1>
            <ul>
                {JSON.stringify(document, null, 2)}
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
import {MainLayout} from "../../components/MainLayout";
import Router from "next/router";

export default function Doc({document : {docDate, displayName}}) {
    return (
        <MainLayout>
            <h1>
                {displayName}
            </h1>
            <li>
                {docDate}
            </li>
            <button onClick={() => Router.push('/documents')}>Go back</button>
        </MainLayout>
    )
}

Doc.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:4200/document/${ctx.query.id}`)
    const document = await res.json()
    return {
        document
    }
}

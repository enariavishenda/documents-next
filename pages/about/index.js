import Link from "next/link";
import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Index() {

    return (
        <MainLayout title={'About'}>
            <h1>About Page</h1>
            <h2>
                Why Next.js?

                React is a library for client-side applications. If you need to fetch dynamic data from a server, you
                have to set up (or connect to) an external API. With Next.js, you can use both the client and the server
                in the same application. For example, API routes provide a straight-forward solution for connecting with
                external services, APIs, or even persisting to a database.

                This makes Next.js a compelling, all-in-one solution for creating forms.
            </h2>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}
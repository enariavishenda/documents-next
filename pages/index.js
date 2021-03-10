import {MainLayout} from "../components/MainLayout";

export default function Home() {
    return (
        <MainLayout title={'Home Page'}>
            <h2>Hello Next.js</h2>
            <h1>
                The React Framework
                for Production
            </h1>
            <h4>
                Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
            </h4>
            <img src="https://pbs.twimg.com/media/D84glqJW4AAGYMP.jpg:large" alt="Server Side Render"/>
            <h3>
                Meet hundreds of beautiful websites built with Next.js by Vercel
            </h3>
        </MainLayout>
    )
}

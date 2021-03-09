import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Post() {
    const router = useRouter()
    return (
        <MainLayout>
            <h1>
                Document {router.query.id}
            </h1>
        </MainLayout>
    )

}
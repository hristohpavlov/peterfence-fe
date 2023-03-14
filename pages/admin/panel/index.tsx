import { NextPage } from "next";
import { getSession } from "next-auth/react";

const Panel: NextPage = () => {
    return (
        <div>
            <h1>Admin Panel</h1>
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/unauthorized',
                permanent: false,
            },
        }
    }

    return {
        props: { session }
    }
}

export default Panel;
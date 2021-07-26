import Navbar from './Navbar'
import Head from "next/head";


const layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            {children}
        </>
    )
}

export default layout;
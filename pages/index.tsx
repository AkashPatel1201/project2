import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <div className="mt-14">
                <h1 className="text-2xl font-semibold">
                    This page is Home Page
                </h1>
            </div>
        </>
    );
};

export default Home;

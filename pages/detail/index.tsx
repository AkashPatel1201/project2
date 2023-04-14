import React from "react";
import Head from "next/head";

const Detail = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Detail Page</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <div className="mt-14">
                <h1 className="text-2xl font-semibold">
                    This page is Detail Page
                </h1>
            </div>
        </>
    );
};

export default Detail;

import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const Service = ({ data }: any) => {
    return (
        <>
            <Head>
                <title>Service Page</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <div className="mt-14">
                <h1 className="text-2xl font-semibold">
                    This page is Service Page
                </h1>
                <div className="container flex flex-col text-center">
                    {data.slice(0, 10).map((curElem: any) => {
                        return (
                            <div
                                key={curElem.id}
                                className="flex text-left p-5 my-0.5 rounded-xl m-auto shadow-md"
                            >
                                <div className="flex">
                                    <h3 className="py-1 px-3 bg-blue-400 rounded-3xl">
                                        {curElem.id}
                                    </h3>
                                    <Link href={`/service/${curElem.id}`}>
                                        <h3 className="pl-3 self-center cursor-pointer hover:text-red-500">
                                            {curElem.title}
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Service;

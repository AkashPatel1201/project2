import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem: any) => {
        return {
            params: {
                PageNo: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.PageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const MyData = ({ data }: { data: any }) => {
    return (
        <>
            <Head>
                <title>Service Page</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <div className="container mt-16 flex flex-col text-center">
                <div className="flex text-left p-5 my-0.5 rounded-xl m-auto shadow-md w-3/5">
                    <div className="">
                        <h3 className="py-1 mb-2 px-3 w-8 bg-blue-400 rounded-3xl">
                            {data.id}
                        </h3>
                        <h3 className="mb-2 self-center text-2xl cursor-pointer hover:text-red-500">
                            {data.title}
                        </h3>
                        <p>{data.body}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyData;

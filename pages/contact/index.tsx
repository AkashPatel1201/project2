import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const Contact = (): JSX.Element => {
    const [myData, setMyData] = useState([]);
    const [isError, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setMyData(res.data))
            .catch((error) => setError(error.message));
    }, []);
    return (
        <>
            <Head>
                <title>Contact Page</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <div className="mt-14">
                <h1 className="text-2xl font-semibold">
                    This page is Contact Page
                </h1>
                <h3 className="text-2xl font-semibold">{isError}</h3>
                <div>
                    {myData.slice(0, 6).map((post) => {
                        const { id, title, body } = post;
                        return (
                            <div className="card" key={id}>
                                <h2>{title}</h2>
                                <p>{body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Contact;

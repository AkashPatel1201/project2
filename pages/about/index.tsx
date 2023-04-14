import React from "react";
import Image from "next/image";
import Head from "next/head";

const About = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="images/favicon.ico" />
            </Head>
            <div className="text-center mt-14">
                <h1 className="text-2xl font-semibold py-2">
                    This page is About Page
                </h1>
                <Image src="/images/demo1.jpg" width="500" height="300"></Image>
                <Image
                    src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?w=1060&t=st=1681302636~exp=1681303236~hmac=82a3e4fe762514d0308f1ec3d7078547d5d591c9564a4a552bf779022f1c948b"
                    width="500"
                    height="300"
                ></Image>
            </div>
        </>
    );
};

export default About;

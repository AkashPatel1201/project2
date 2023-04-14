import React, { ReactNode } from "react";
import Header from "@components/header";
import Footer from "@components/footer";

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

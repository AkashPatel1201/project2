import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = (): JSX.Element => {
    return (
        <>
            <div className="fixed top-0 w-full">
                <nav>
                    <ul className={styles.menubar}>
                        <li className={styles.list}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/service">Service</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/detail">Detail</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;

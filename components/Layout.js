import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Meta from "../components/Meta";

import React from "react";

function Layout({ children }) {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <Header />
			<main className={styles.main}>{children}</main>
            </div>
            </>
	);
}

export default Layout;

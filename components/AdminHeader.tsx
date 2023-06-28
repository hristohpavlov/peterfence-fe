import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from '../styles/Header.module.scss';
import { Helmet } from 'react-helmet';

interface HeaderProps {
    scrollPos?: number;
}
const AdminHeader = (props: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const [scrolling, useScrolling] = useState(false);
    const [currTheme, setCurrTheme] = useState<String | undefined>('');
    const [date, setDate] = useState(0);
    useEffect(() => {
        setCurrTheme(theme);
    }, [theme])
    useEffect(() => {
        if (props.scrollPos && props.scrollPos > 50) {
            useScrolling(true);
        } else {
            useScrolling(false);
        }
    }, [props.scrollPos])
    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem("theme", "dark")
        } else if (theme === 'light') {
            localStorage.setItem("theme", "light")
        }
    }, [theme])
    console.log("default theme", theme)
    return (
        <>
            <Helmet>
                <title>Peterfence</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/static/logo-pf-final.webp" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" className={classNames(scrolling ? "active" : "active")}>
                <Container style={{ maxWidth: "unset" }}>
                    <b>Admin Panel</b>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/admin/panel/home" aria-label="Home Page">Home Page</Nav.Link>
                            <Nav.Link eventKey={2} href="/admin/panel/shop" aria-label="Shop Page">Shop Page</Nav.Link>
                            <Nav.Link eventKey={3} href="/admin/panel/about" aria-label="About Us Page">About Us Page</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AdminHeader
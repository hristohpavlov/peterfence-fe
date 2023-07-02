import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from '../styles/Header.module.scss';
import { Helmet } from 'react-helmet';

interface HeaderProps {
    scrollPos?: number;
}
const Header = (props: HeaderProps) => {
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
        var today = new Date(),
            time = today.getHours();
        setDate(time);
        if (localStorage.getItem('theme') === null) {
            if (time > 6 && time < 18) {
                setTheme("light");
            } else if (date < 18 || date > 6) {
                setTheme("dark");
            }
        }
    }, [])
    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem("theme", "dark")
        } else if (theme === 'light') {
            localStorage.setItem("theme", "light")
        }
    }, [theme])
    console.log(date)
    console.log("default theme", theme)
    return (
        <>
            <Helmet>
                <title>Peterfence - Your Local Fencing Supplier</title>
                <meta name="description" content="We bridge a market gap by importing acacia wood fencing with resistance class 4 and 35-year average service lifespan at fair and reasonable prices." />
                <link rel="icon" href="/static/peterfence-only-logo-2.webp" />
                <link rel="canonical" href="https://peterfence.com" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" className={classNames(scrolling ? "active" : "transparent")}>
                <Container style={{ maxWidth: "unset" }}>
                    {currTheme === 'dark' && <Navbar.Brand href="/" aria-label="Home Page Navigation Button"><img alt="company logo dark" src="/static/peterfence-only-logo-dark.webp" style={{ maxHeight: '50px', minWidth: '60px', marginTop: '-10px', marginBottom: '-10px' }} /></Navbar.Brand>}
                    {currTheme === 'light' && <Navbar.Brand href="/"><img alt="company logo" aria-label="Home Page Navigation Button" src="/static/peterfence-only-logo.webp" style={{ maxHeight: '50px', minWidth: '60px', marginTop: '-10px', marginBottom: '-10px' }} /></Navbar.Brand>}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around" aria-label="menu">
                        <span className="toggler-icon top-bar" aria-label="menu icon"></span>
                        <span className="toggler-icon middle-bar" aria-label="menu icon"></span>
                        <span className="toggler-icon bottom-bar" aria-label="menu icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <label id="checkbox-1" aria-label="mode-toggle" role="button" className={classNames(styles.switch)}>
                                <input aria-labelledby="checkbox-1" aria-label="mode-toggle" role="button" type="checkbox" checked={theme === 'dark' ? true : false} onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}></input>
                                <span aria-labelledby="checkbox-1" aria-label="mode-toggle" role="button" className={classNames(styles.slider)}></span>
                            </label>
                            <Nav.Link href="/" aria-label="Home Page">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/shop" aria-label="Shop Page">Shop</Nav.Link>
                            <Nav.Link eventKey={3} href="/about" aria-label="About Us Page">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header
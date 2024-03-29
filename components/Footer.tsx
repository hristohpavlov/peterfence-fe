import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Footer.module.scss';
import classNames from "classnames";
const Footer = () => {
    return (
        <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#242526", marginTop: "40vh" }}
        >
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h1 className={classNames("text-uppercase mb-4 font-weight-bold", styles.text_sm_sm)}>
                                PETERFENCE
                            </h1>
                            <p>
                                The highest quality manufacturer and supplier of wooden fencing designed for agricultural and rural communities as well as  the modern gardener intending to secure property boundaries
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h1 className={classNames("text-uppercase mb-4 font-weight-bold", styles.text_sm_sm)}>Products</h1>
                            <p>
                                <a className="text-white" href="/" aria-label="Home Page">Home</a>
                            </p>
                            <p>
                                <a className="text-white" href="/shop" aria-label="Shop Page">Shop</a>
                            </p>
                            <p>
                                <a className="text-white" href="/shop" aria-label="About Us Page">About us</a>
                            </p>

                        </div>
                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h1 className={classNames("text-uppercase mb-4 font-weight-bold", styles.text_sm_sm)}>Contact Us</h1>
                            <p><FontAwesomeIcon icon={faHome} className="mr-3" /> Aberdeen, AB24 5PR, UK</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> peterfence@yahoo.com</p>
                            <p><FontAwesomeIcon icon={faPhone} className="mr-3" /> 07955 398345</p>
                        </div>
                    </div>
                </section>

                <hr className="my-3" />

                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                © 2023 Copyright:
                                <a className="text-white" href="/" aria-label="Home Page"
                                > Peterfence Ltd.</a
                                >
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a
                                className={classNames("btn btn-outline-light btn-floating m-1 text-white", styles.icon_123)}
                                role="button"
                                aria-label="facebook page"
                            ><FontAwesomeIcon icon={faFacebookF} /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                                aria-label="twitter page"
                            ><FontAwesomeIcon icon={faTwitter} /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                                aria-label="our email"
                            ><FontAwesomeIcon icon={faGoogle} /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1 text-white"
                                role="button"
                                aria-label="instagram page"
                            ><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer
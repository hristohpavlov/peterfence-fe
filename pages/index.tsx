import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import EmailModal from '../components/EmailModal';

const Home: NextPage = () => {
    const [showModal, setShow] = useState(false);
    const handleClose = () => { setShow(false); return showModal };
    const handleShow = () => { setShow(true); return showModal };
    return (
        <>
            <section id="hero">
                <div className={classNames("container", styles.container_center, styles.text_custom)}>
                    <div className={classNames("divider", styles.divider)}></div>
                    <div className="container my-5 pt-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <img alt="acacia tree" width="100" className=" mt-4 pt-5" src="/static/picture_1.webp" />
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5 mt-4">
                                    <h1 className="display-4">PETERFENCE</h1>
                                    <p className="lead">Coming from a farming background, we have been manufacturing and supplying the highest
                                        quality wooden fencing not just for the agricultural and rural communities but also for the
                                        modern gardener intending to secure property boundaries in style and with ease.</p>
                                    <a href="/about" aria-label="About Us Page" className="btn btn-outline-light">About us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5 pb-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="p-5 mt-4">
                                    <h1 className="display-4" style={{ textAlign: 'right' }}> ACACIA FENCING</h1>
                                    <p className="lead" style={{ textAlign: 'right' }}> Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for
                                        creating outdoor green spaces, decking, gardening and much more.<br />
                                        The lifespan of acacia is minimum 30 years when in contact with the ground.<br /></p>
                                    <a href="/shop" className="btn btn-outline-light float-end" aria-label="Shop Page">Shop Now</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img alt="fence builder" width="100" className=" pt-5 mt-4" src="/static/photo_2.webp" />
                            </div>

                        </div>
                    </div>
                    <div className={classNames("divider", styles.divider)}></div>
                </div>
            </section>
            <div className={classNames("container", styles.container_center)}>
                <div className={classNames("main", styles.main)}>
                    <h1 className={classNames("text-center mb-5", styles.text_custom)}>OUR PRODUCTS</h1>
                    <div className={classNames("divider", styles.divider)}></div>
                    <ul className={classNames("cards", styles.cards)}>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="wooden fence" className={classNames("img", styles.img)} src="/static/1.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 1</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={1} productName={"Fence1"} />
                                </div>
                            </div>
                        </li>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="acacia fence" className={classNames("img", styles.img)} src="/static/2.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 2</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={2} productName={"Fence2"} />
                                </div>
                            </div>
                        </li>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="wooden fencing" className={classNames("img", styles.img)} src="/static/3.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 3</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={3} productName={"Fence3"} />
                                </div>
                            </div>
                        </li>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="acacia fencing" className={classNames("img", styles.img)} src="/static/4.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 4</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={4} productName={"Fence4"} />
                                </div>
                            </div>
                        </li>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="pet fence" className={classNames("img", styles.img)} src="/static/5.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 5</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={5} productName={"Fence5"} />
                                </div>
                            </div>
                        </li>
                        <li className={classNames("cards_item", styles.cards_item)}>
                            <div className={classNames("card", styles.card)}>
                                <div className={classNames("card_image", styles.card_image)}><img alt="privacy fence" className={classNames("img", styles.img)} src="/static/6.webp" /></div>
                                <div className={classNames("card_content", styles.card_content)}>
                                    <h2 className={classNames("card_title", styles.card_title)}>Fence 6</h2>
                                    <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                    <EmailModal id={6} productName={"Fence6"} />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a href="/shop" className="btn btn-lg btn-outline-light text-center mt-5 mb-5" aria-label="Shop Page">See more products</a>
                    </div>
                    <div className={classNames("divider", styles.divider)}></div>
                </div>
            </div>
        </>
    );
};

export default Home;

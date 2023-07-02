import type { NextPage } from 'next';
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import classNames from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import EmailModal from '../components/EmailModal';
import { Helmet } from 'react-helmet';

const Shop: NextPage = () => {

    return (
        <>
            <Helmet>
                <title>Shop High Quality Wood Fencing</title>
                <meta name="description" content="Acacia wood is the best choice for all external projects due to its high density and resilience to adverse weather conditions and wood-destroying fungi and insects." />
                <link rel="canonical" href="https://peterfence.com/shop" />
            </Helmet>
            <section id="hero">
                <div className={classNames("container mt-5 mb-n5", styles.container_center)}>
                    <div className={classNames("main", styles.main)}>
                        <h1 className={classNames("text-center mb-5", styles.text_custom)}>Our Products</h1>
                        <div className={classNames("divider", styles.divider)}></div>
                        <ul className={classNames("cards", styles.cards)}>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="wooden fence" className={classNames("img", styles.img)} src="/static/1.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 1</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={1} productName={"Fence1"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="acacia fence" className={classNames("img", styles.img)} src="/static/2.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 2</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={2} productName={"Fence2"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="wooden fencing" className={classNames("img", styles.img)} src="/static/3.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 3</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={3} productName={"Fence3"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/4.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 4</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={4} productName={"Fence4"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="pet fence" className={classNames("img", styles.img)} src="/static/5.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 5</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={5} productName={"Fence5"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="acacia fence" className={classNames("img", styles.img)} src="/static/6.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 6</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={6} productName={"Fence6"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/1.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 7</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={7} productName={"Fence7"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="quality fence" className={classNames("img", styles.img)} src="/static/2.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 8</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={8} productName={"Fence8"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="commercial fence" className={classNames("img", styles.img)} src="/static/3.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 9</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={9} productName={"Fence9"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="construction fence" className={classNames("img", styles.img)} src="/static/4.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 10</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={10} productName={"Fence10"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="long-lasting fence" className={classNames("img", styles.img)} src="/static/5.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 11</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={11} productName={"Fence11"} />
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/6.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 12</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <EmailModal id={12} productName={"Fence12"} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={classNames("divider", styles.divider)}></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
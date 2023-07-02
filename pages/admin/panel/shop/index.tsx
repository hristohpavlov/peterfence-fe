import type { NextPage } from 'next';
import Image from 'next/image'
import styles from '../../../../styles/Home.module.scss';
import classNames from 'classnames';
import EmailModal from '../../../../components/EmailModal';
import { getSession } from 'next-auth/react';
import router from 'next/router';
import ProductModal from '../../../../components/ProductModal';

const Shop: NextPage = () => {

    return (
        <>
            <section id="hero">
                <div className={classNames("container mt-5 mb-n5", styles.container_center)}>
                    <a className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} onClick={() => router.back()}>Go Back</a>
                    <div className={classNames("main", styles.main)}>
                        <h1 className={classNames("text-center mb-5", styles.text_custom)}>Products</h1>
                        <ul className={classNames("cards", styles.cards)}>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="wooden fence" className={classNames("img", styles.img)} src="/static/1.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 1</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={1} productName={"Fence 1"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/2.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 2</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={2} productName={"Fence 2"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="acacia fence" className={classNames("img", styles.img)} src="/static/3.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 3</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={3} productName={"Fence 3"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="commercial fence" className={classNames("img", styles.img)} src="/static/4.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 4</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={4} productName={"Fence 4"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="construction fence" className={classNames("img", styles.img)} src="/static/5.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 5</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={5} productName={"Fence 5"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="long-lasting fence" className={classNames("img", styles.img)} src="/static/6.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 6</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={6} productName={"Fence 6"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="quality fence" className={classNames("img", styles.img)} src="/static/1.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 7</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={7} productName={"Fence 7"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/2.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 8</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={8} productName={"Fence 8"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="wooden fencing" className={classNames("img", styles.img)} src="/static/3.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 9</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={9} productName={"Fence 9"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="acacia fencing" className={classNames("img", styles.img)} src="/static/4.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 10</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={10} productName={"Fence 10"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="pet-friendly fence" className={classNames("img", styles.img)} src="/static/5.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 11</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={11} productName={"Fence 11"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                            <li className={classNames("cards_item", styles.cards_item)}>
                                <div className={classNames("card", styles.card)}>
                                    <div className={classNames("card_image", styles.card_image)}><Image alt="privacy fence" className={classNames("img", styles.img)} src="/static/6.webp" /></div>
                                    <div className={classNames("card_content", styles.card_content)}>
                                        <h2 className={classNames("card_title", styles.card_title)}>Fence 12</h2>
                                        <p className={classNames("card_text", styles.card_text)}>Demo of product description</p>
                                        <ProductModal id={12} productName={"Fence 12"} />
                                        {/* <EmailModal /> */}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/unauthorized',
                permanent: false,
            },
        }
    }

    return {
        props: { session }
    }
}

export default Shop;
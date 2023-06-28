import type { NextPage } from 'next';
import styles from '../../../../styles/Home.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { getSession } from 'next-auth/react';
import router from 'next/router';
import axios from 'axios';

const Home: NextPage = () => {
    const [values, setValues] = useState({
        picture1: 'https://i.postimg.cc/q7CRygTk/healthcare-knowledge-base-medical-online-600w-1673490232.webp',
        picture2: 'https://i.postimg.cc/q7CRygTk/healthcare-knowledge-base-medical-online-600w-1673490232.webp',
        heading1: 'PETERFENCE',
        heading2: 'ACACIA FENCING',
        text1: 'Coming from a farming background, we have been manufacturing and supplying the highest quality wooden fencing not just for the agricultural and rural communities but also for the modern gardener intending to secure property boundaries in style and with ease.',
        text2: 'Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for creating outdoor green spaces, decking, gardening and much more. The lifespan of acacia is minimum 30 years when in contact with the ground.',
    });
    const { picture1, picture2, heading1, heading2, text1, text2 } = values
    const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("values")
        try {
            await axios.post("/api/kummenhome", values, {
                headers: {
                    "Content-Type": "application/json",
                }
            },
            );
            router.push("/admin/panel");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <section id="hero">
                <div className={classNames("container", styles.container_center, styles.text_custom)}>
                    <a className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} onClick={() => router.back()}>Go Back</a>
                    <h1 className={classNames("text-center m-5 p-5", styles.text_custom)}>Home Page</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="container my-5 pt-3">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="md-form mb-5">
                                        <i className="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" htmlFor="form34">Picture 1 Link</label>
                                        <input onChange={handleChange} type="text" id="form34" name="picture1" value={picture1} className="form-control validate" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5 mt-4">
                                        <div className="md-form">
                                            <input onChange={handleChange} type="text" id="form34" name="heading1" value={heading1} className="form-control validate" />
                                            <br />
                                            <i className="fas fa-pencil prefix grey-text"></i>
                                            <textarea onChange={handleChange} id="form8" name="text1" value={text1} className="md-textarea form-control" rows={4}></textarea>
                                        </div>
                                        {/* <h1 className="display-4">PETERFENCE</h1> */}
                                        {/* <p className="lead">Coming from a farming background, we have been manufacturing and supplying the highest
                                            quality wooden fencing not just for the agricultural and rural communities but also for the
                                            modern gardener intending to secure property boundaries in style and with ease.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container my-5 pb-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5 mt-4">
                                        <div className="md-form">
                                            <input onChange={handleChange} type="text" id="form34" name="heading2" value={heading2} className="form-control validate" />
                                            <br />
                                            <i className="fas fa-pencil prefix grey-text"></i>
                                            <textarea onChange={handleChange} id="form8" name="text2" value={text2} className="md-textarea form-control" rows={4}></textarea>
                                        </div>
                                        {/* <h1 className="display-4">ACACIA FENCE</h1>
                                        <p className="lead" style={{ textAlign: 'right' }}> Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for
                                            creating outdoor green spaces, decking, gardening and much more.<br />
                                            The lifespan of acacia is minimum 30 years when in contact with the ground.<br /></p> */}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="md-form mb-5">
                                        <i className="fas fa-user prefix grey-text"></i>
                                        <label data-error="wrong" data-success="right" htmlFor="form34">Picture 2 Link</label>
                                        <input onChange={handleChange} value={picture2} type="text" id="form34" name="picture2" className="form-control validate" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="md-form text-center">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <input className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} type="submit" value="Change Text" />
                        </div>
                        <br />
                        <br />
                    </form>
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

export default Home;
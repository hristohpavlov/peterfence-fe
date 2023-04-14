import type { NextPage } from 'next';
import styles from '../../../../styles/Home.module.scss'
import classNames from 'classnames';
import { getSession } from 'next-auth/react';
import router from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const notifySuccess = (message: any) =>
    toast(<p style={{ fontSize: 16 }}>{message}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "success"
    });

export const notifyError = (message: any) =>
    toast(<p style={{ fontSize: 16 }}>{message}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error"
    });

const About: NextPage = () => {
    const [values, setValues] = useState({
        message1: 'Coming from a farming background, we have been manufacturing and supplying the highest quality wooden fencing not just for the agricultural and rural communities but also for modern gardeners intending to secure property boundaries in style and with ease.',
        message2: 'As a sustainable supplier, we pride ourselves on processing and cultivating only the fast-growing acacia trees, which are ideal for all exterior projects due to their natural high density and resilience to adverse weather conditions. Sourced from European forests, acacia is an ecological hardwood which stands out for its low environmental impact (its low carbon footprint) compared to its exotic competitors which are becoming more expensive due to rising shipping costs.',
        message3: 'According to both the British Standards Institution (BSI) and the Commonwealth Standards Network (CSN), acacia is the only European wood species that falls under Use Class 4 and is accordingly suitable for outdoor use in contact with soil and fresh water since it exhibits good elasticity in terms of stiffness, flexural strength and environmental impact resistance, as per British Standard EN 335:2013. Please note, Use Class 3 woods such as chestnut and hazel can also be used outdoors but they are not to come in contact with the ground.',
        message4: 'The natural durability of acacia’s heartwood against wood-destroying agents such as wood decay fungi, insects, marine borers and bacteria has been tested and assessed (considered in BS EN 350:2016). In fact, it is the chemical substances found in acacia trees – polyphenols (more specifically, flavonoids) and radical scavengers that give the wood its natural durability and make it resistant to biological degradation.',
        message5: 'Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for creating outdoor green spaces, decking, gardening, horticulture, viticulture, arboriculture, agriculture, equestrian fencing, hunting and other outdoor sports facilities, interior carpentry, flooring, wall panels, coverings and cladding.',
        message6: 'The use of acacia wood ensures the maximum service life of your product.',
        message7: 'The lifespan of acacia is minimum 30 years when in contact with the ground.',
        message8: '<b>PETERFENCE</b> provides you with peace of mind through robust quality assurance processes, control plans, Production Part Approval Process (PPAP) documentation and quality certified manufacturing. Our reputation rests on the quality of the service we offer, so we consistently deliver thorough support with tact and confidence.',
        message9: 'If have decided to collaborate with us, please do not hesitate to contact us for more information. Thank you.'
    });
    const { message1, message2, message3, message4, message5, message6, message7, message8, message9 } = values
    const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("values")
        try {
            await axios.post("/api/kummenabout", values, {
                headers: {
                    "Content-Type": "application/json",
                }
            },
            );
            notifySuccess("asd")
            router.push("/admin/panel");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>

            <section id="hero">
                <div className={classNames("container", styles.container_center)}>
                    <a className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} onClick={() => router.back()}>Go Back</a>
                    <h1 className={classNames("text-center m-5 p-5", styles.text_custom)}>About Page</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message1" value={message1} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message2" value={message2} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message3" value={message3} className="md-textarea form-control" rows={6}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message4" value={message4} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message5" value={message5} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message6" value={message6} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message7" value={message7} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message8" value={message8} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />

                        <br />

                        <div className="md-form">
                            <i className="fas fa-pencil prefix grey-text"></i>
                            <textarea onChange={handleChange} id="form8" name="message9" value={message9} className="md-textarea form-control" rows={4}></textarea>
                        </div>
                        <br />
                        <div className="modal-footer d-flex justify-content-center">
                            <div className="md-form">
                                <i className="fas fa-pencil prefix grey-text"></i>
                                <input className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} type="submit" value="Change Text" />
                            </div>
                        </div>

                        <br />
                    </form>
                    <br />
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

export default About;
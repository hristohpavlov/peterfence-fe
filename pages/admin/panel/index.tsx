import classNames from "classnames";
import { NextPage } from "next";
import { getSession } from "next-auth/react";
import styles from "../../../styles/Home.module.scss"
import AdminHeader from "../../../components/AdminHeader";
import { useState } from "react";
import axios from "axios";
import { notifyError, notifySuccess } from "../../../components/ContactUsModal";
import { toast } from "react-toastify";

const Panel: NextPage = () => {
    const [values, setValues] = useState({
        email: 'peterfence@yahoo.com',

    });
    const { email } = values
    const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("values")
        try {
            await axios.post("/api/kummenemail", values, {
                headers: {
                    "Content-Type": "application/json",
                }
            },
            );
            notifySuccess("Updating");
        } catch (err) {
            notifyError("Error")
            console.log(err);
        }
    }
    return (
        <div>
            <AdminHeader />
            <>

                <section id="hero">
                    <div className={classNames("container", styles.container_center)}>

                        <form onSubmit={handleSubmit}>
                            <br />
                            <br />
                            <div className="md-form mb-5  text-center">
                                <i className="fas fa-user prefix grey-text"></i>
                                <label className="h1" data-error="wrong" data-success="right" htmlFor="form34">Current Email used for contact</label>
                                <input type="text" id="form34" name="email" value={email} onChange={handleChange} className="form-control validate" />

                            </div>
                            <br />
                            <br />
                            <div className="modal-footer d-flex justify-content-center">
                                <div className="md-form">
                                    <i className="fas fa-pencil prefix grey-text"></i>
                                    <input className={classNames("btn card_btn btn-lg btn-outline-dark text-center")} type="submit" value="Change Email" />
                                </div>
                            </div>

                        </form>
                    </div>
                </section>
            </>
        </div>
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

export default Panel;
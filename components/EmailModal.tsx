import classNames from "classnames";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import styles from '../styles/Home.module.scss';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

const EmailModal = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { name, email, subject, message } = values


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (values.name !== '' && values.email !== '') {
      try {
        await axios.post("/api/contact", values, {
          headers: {
            "Content-Type": "application/json",
          }
        },
        );
        notifySuccess("Thank you! You have sent an inquiry to our team! We will respond as soon as possible!");
      } catch (err) {
        notifyError("There has been error submitting your enquiry. Please try again later")
        console.log(err);
      }
      handleClose();
      setValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } else {
      notifyError("Please enter valid name and email in order for our team to reach back")
    }

  }
  return (
    <>
      <button className={classNames("btn card_btn", styles.btn, styles.card_btn)} onClick={handleShow}>Get Inquiry</button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <div className="modal-content">
          <Modal.Header closeButton className="modal-header text-center">
            <Modal.Title className="modal-title w-100 font-weight-bold">Get Inquiry</Modal.Title>
          </Modal.Header>
          <div className="modal-body mx-3">
            <form onSubmit={handleSubmit}>
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input type="text" id="form34" name="name" value={name} onChange={handleChange} className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="form34">Your name</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="form29" name="email" value={email} onChange={handleChange} className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="form29">Your email</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-tag prefix grey-text"></i>
                <input type="text" id="form32" name="subject" value={subject} onChange={handleChange} className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="form32">Subject</label>
              </div>

              <div className="md-form">
                <i className="fas fa-pencil prefix grey-text"></i>
                <textarea id="form8" name="message" value={message} onChange={handleChange} className="md-textarea form-control" rows={4}></textarea>
                <label data-error="wrong" data-success="right" htmlFor="form8">Your message</label>
              </div>

              <div className="modal-footer d-flex justify-content-center">
                <div className="md-form">
                  <i className="fas fa-pencil prefix grey-text"></i>
                  <input className="btn btn-unique" type="submit" value="Send Inquiry" />
                </div>
              </div>

            </form>
          </div>

        </div>
      </Modal>
    </>
  )
}

export default EmailModal
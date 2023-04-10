import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"
import styles from '../styles/Home.module.scss';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface ModalProps {
  id: number,
  productName: string
}

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

const ProductModal = (props: ModalProps) => {
  const [values, setValues] = useState({
    name: '',
    id: 0,
    productName: '',
    link: '',
    description: ''
  });
  const { id, productName, name, link, description } = values
  useEffect(() => {
    setValues({ ...values, id: props.id, productName: props.productName })
  }, [])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (values.name !== '') {
      try {
        await axios.post("/api/kummenproduct", values, {
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
        id: 0,
        productName: '',
        link: '',
        description: '',
      })
    } else {
      notifyError("Error")
    }

  }
  return (
    <>
      <button className={classNames("btn card_btn", styles.btn, styles.card_btn)} onClick={handleShow}>Modify Product</button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <div className="modal-content">
          <Modal.Header closeButton className="modal-header text-center">
            <Modal.Title className="modal-title w-100 font-weight-bold">Modify Product</Modal.Title>
          </Modal.Header>
          <div className="modal-body mx-3">
            <form onSubmit={handleSubmit}>
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <label data-error="wrong" data-success="right" htmlFor="form34">Product name</label>
                <input type="text" id="form34" name="name" value={name} onChange={handleChange} className="form-control validate" />
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <label data-error="wrong" data-success="right" htmlFor="form29">Product image link</label>
                <input type="text" id="form34" name="link" value={link} onChange={handleChange} className="form-control validate" />

              </div>

              <div className="md-form">
                <i className="fas fa-pencil prefix grey-text"></i>
                <label data-error="wrong" data-success="right" htmlFor="form8">Product Description</label>
                <textarea id="form8" name="description" value={description} onChange={handleChange} className="md-textarea form-control" rows={4}></textarea>

              </div>

              <div className="modal-footer d-flex justify-content-center">
                <div className="md-form">
                  <i className="fas fa-pencil prefix grey-text"></i>
                  <input className="btn btn-unique" type="submit" value="Save changes" />
                </div>
              </div>

            </form>
          </div>

        </div>
      </Modal>
    </>
  )
}

export default ProductModal
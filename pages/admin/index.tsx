import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'

import { loginUser } from '../../helpers'
import { Button, Container, Form } from 'react-bootstrap'


const Admin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const router = useRouter()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setLoading(true)

            const loginRes = await loginUser({ email, password })

            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "")
            }
            else {
                router.push("/admin/panel")
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg)
            }
        }

        setLoading(false)
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom">
                            <h2 className="p-3">Admin Panel</h2>
                        </div>
                        <div className="card-body">
                            <Form name="contact-form" onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input placeholder='Email'
                                        type='email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="form-control"
                                        required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input placeholder='Password'
                                        type='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="form-control"
                                        required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-dark text-light">Login</button>
                                    <p>{submitError}</p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterComponent = () => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:5058/api/Register", {
                    username: values.username,
                    password: values.password,
                });

                setSuccessMessage("Registration successful!");

                // Delay navigation to allow the user to see the success message
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } catch (error) {
                formik.setFieldError("username", "Username already taken");
            }
        },
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 rounded-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4 text-primary">Register </h2>

                {/* ✅ Success Message - Now it displays properly before redirecting */}
                {successMessage && (
                    <div className="alert alert-success text-center">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Username <span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            className={`form-control ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your username"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <div className="invalid-feedback">{formik.errors.username}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Password <span style={{ color: "red" }}>*</span></label>
                        <input
                            type="password"
                            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your password"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Confirm Password <span style={{ color: "red" }}>*</span></label>
                        <input
                            type="password"
                            className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Re-enter your password"
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                        )}
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms" className="ms-2">I agree to T&C <span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button className="btn btn-dark" type="submit">
                            Register
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => navigate("/")}
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;

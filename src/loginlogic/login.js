import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginComponent = ({ login }) => {
    const navigate = useNavigate();
    const loginApi = "http://localhost:5058/api/Login";

    // Validation Schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    // Formik for handling form state and validation
     
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
        },
        validationSchema: validationSchema,
        validateOnChange: true,  
        validateOnBlur: true,     
        onSubmit: (values) => {
            axios
                .post(loginApi, values)
                .then((response) => {
                    if (response.data) {
                        localStorage.setItem("jwtToken", response.data);
                        login();
                        navigate("/Home");
                    } else {
                        formik.setFieldError("password", "Invalid Credentials");
                    }
                })
                .catch(() => {
                    formik.setFieldError("password", "Check the credentials & try again.");
                });
        },
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 rounded-4" style={{ width: "400px" }}>
                <h2 className="text-center mb-4 text-primary">Login</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Username <span style={{ color: "red" }}>*</span></label>
                        <input
                            type="text"
                            className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your username"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="invalid-feedback">{formik.errors.name}</div>
                        )}
                    </div>

                    {/* Password Field */}
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

                    {/* Buttons */}
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Login Button */}
                        <button className="btn btn-dark d-flex align-items-center justify-content-center gap-2">
                            <span className="material-symbols-outlined" style={{ fontSize: "20px", verticalAlign: "middle" }}>login</span>
                            <span>Login</span>
                        </button>

                        {/* Register Button (Aligned to Right) */}
                        <button
                            type="button"
                            
                            className="btn btn-outline-primary"
                            
                            onClick={
                                
                                () => {
                                    console.log("Register button clicked!");
                                    navigate("/register")}}  
                        >
                            Register
                        </button>

                       
                    </div>

                </form>
            </div>
        </div>
    );
};

export default LoginComponent;

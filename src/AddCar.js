import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import APIManager from "./APIManager";

function AddCar() {
    const navigate = useNavigate();
    const baseUrl = `http://localhost:5058/api/Car`;

    // State for success message
    const [successMessage, setSuccessMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            Brand: '',
            Model: '',
            Year: '',
            Color: '',
            Price: ''
        },
        validationSchema: Yup.object({
            Brand: Yup.string().required("Brand is required"),
            Model: Yup.string().required("Model is required"),
            Year: Yup.number().typeError("Year must be a number").required("Year is required"),
            Color: Yup.string().required("Color is required"),
            Price: Yup.number().typeError("Price must be a number").required("Price is required")
        }),
        onSubmit: addCarToDb
    });

    function addCarToDb(values) {
        APIManager.PostApicall(baseUrl, values).then(response => {
            if (response.ok) {
                setSuccessMessage("Car added successfully!");

                setTimeout(() => {
                    navigate('/carlist');
                }, 1500);
            } else {
                alert("Error adding the car");
            }
        });
    }

    return (
        <div className="container vh-100 w-100 p-4">
            <h2 className="mb-3">Add Car</h2>

            {/* Success Alert */}
            {successMessage && (
                <div className="alert alert-success text-center" role="alert">
                    {successMessage}
                </div>
            )}

            <form onSubmit={formik.handleSubmit} className="bg-white p-4 border rounded">
                {/* First Row */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Brand <span style={{ color: "red" }}>*</span></label>
                        <input type="text" name="Brand" className="form-control"
                            value={formik.values.Brand} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Brand && formik.errors.Brand && <div className="text-danger small">{formik.errors.Brand}</div>}
                    </div>
                    <div className="col-md-4">
                            <label className="form-label">
                            Model <span style={{ color: "red" }}>*</span>
                            </label>

                        <input type="text" name="Model" className="form-control"
                            value={formik.values.Model} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Model && formik.errors.Model && <div className="text-danger small">{formik.errors.Model}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Year <span style={{ color: "red" }}>*</span></label>
                        <input type="number" name="Year" className="form-control"
                            value={formik.values.Year} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Year && formik.errors.Year && <div className="text-danger small">{formik.errors.Year}</div>}
                    </div>
                </div>

                {/* Second Row  */}
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Color <span style={{ color: "red" }}>*</span></label>
                        <input type="text" name="Color" className="form-control"
                            value={formik.values.Color} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Color && formik.errors.Color && <div className="text-danger small">{formik.errors.Color}</div>}
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Price <span style={{ color: "red" }}>*</span></label>
                        <input type="number" name="Price" className="form-control"
                            value={formik.values.Price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.Price && formik.errors.Price && <div className="text-danger small">{formik.errors.Price}</div>}
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddCar;

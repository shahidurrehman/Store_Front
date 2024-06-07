import { useFormik } from 'formik';
import React, { Component, useState } from 'react'
import Staff from '..';
import { selectgetAllUserStatus } from '../../../../app-redux/common/commonSlice';
import { useAppSelector } from '../../../../app-redux/hooks';
import CInput from '../../../../common/components/c_input';

const StaffFilterForm = ({ handleSubmit, filterProps }) => {
    const getAllUserStatus = useAppSelector(selectgetAllUserStatus)

    const formik = useFormik({
        initialValues: {
            "displayName": null,
            "Designation": null,
            "dateOfJoining": null,
            "email": null,
        },
        // validationSchema: signinFormValidation,
    });

    function handleClick() {
        handleSubmit(formik.values)
    }

    return (
        <form form onSubmit={formik.handleSubmit} onReset={formik.resetForm} >
            <div className="row">
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Name:</label>
                    <CInput
                        id="displayName"
                        name="displayName"
                        value={formik.values.displayName}
                        placeholder="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Designation:</label>
                    <CInput
                        id="Designation"
                        name="Designation"
                        value={formik.values.Designation}
                        placeholder="Designation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Date of Joining:</label>
                    <CInput
                        id="dateOfJoining"
                        name="dateOfJoining"
                        value={formik.values.dateOfJoining}
                        placeholder="Date of Joining"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="date"
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Email:</label>
                    <CInput
                        id="email"
                        name="email"
                        value={formik.values.email}
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                    />

                </div>
                <div className='col-12 text-end'>
                <button type="Reset" className="ms-1 btn btn-light " >
                    Reset
                </button>
                    <button type="button" onClick={handleClick} className={`ms-2 btn btn-primary`}>
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}

export default StaffFilterForm;
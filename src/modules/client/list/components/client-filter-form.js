import { useFormik } from 'formik';
import React from 'react'
import Button from '../../../../common/components/button';
import CInput from '../../../../common/components/c_input';
import CSelect from '../../../../common/components/c_select';
import {clientSearchFormValidation} from "../../validation";

const ClientFilterForm = ({ handleSubmit }) => {

    const formik = useFormik({
        initialValues: {
            "clientName": null,
            "phoneNumber": null,
            "legalStatus": null,
            "clientContact": null,
            "contactEmail": null,
        },
        // validationSchema: clientSearchFormValidation,

    });

    function handleClick() {

        handleSubmit(formik.values)
    }


    return (
        <form  onReset={formik.resetForm}>
        <div className="row">
            <div className="mb-3 col-xl-3">
                <label className="form-label">Client Name:</label>
                <CInput
                    id="clientName"
                    name="clientName"
                    value={formik.values.clientName}
                    placeholder="Client Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                />
            </div>
            <div className="mb-3 col-xl-3">
                <label className="form-label">Phone Number:</label>
                <CInput
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                />
            </div>
            <div className="mb-3 col-xl-2">
                <label className="form-label">Legal Status:</label>
                <CSelect
                    id="legalStatus"
                    name="legalStatus"
                    value={formik.values.legalStatus}
                    placeholder="Legal Status"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="select"
                    defualt_option={"Please Select"}
                    options={[
                        { value: "Sole Owner", lable: "Sole Owner" },
                        { value: "Partnership", lable: "Partnership" },
                        { value: "Joint Venture", lable: "Joint Venture" },
                        { value: "Private Corporation", lable: "Private Corporation" },
                        { value: "Public Corporation", lable: "Public Corporation" },
                        { value: "Not For Profit", lable: "Not For Profit" }
                    ]}
                />
            </div>
            <div className="mb-3 col-xl-2">
                <label className="form-label">Client Contact:</label>
                <CInput
                    id="clientContact"
                    name="clientContact"
                    value={formik.values.clientContact}
                    placeholder="Client Contact"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                />
            </div>

            <div className="mb-3 col-xl-2">
                <label className="form-label">Contact Email:</label>
                <CInput
                    id="contactEmail"
                    name="contactEmail"
                    value={formik.values.contactEmail}
                    placeholder="Contact Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                />
            </div>
            <div className='col-12 text-end'>
                <button type="Reset" className="btn btn-light" >
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

export default ClientFilterForm;
import { useFormik } from 'formik';
import React, { Component, useEffect, useState } from 'react'
import { getAllClientsAction } from '../../../app-redux/common/commonActions';
import { selectgetAllClientStatus, selectgetAllUserStatus } from '../../../app-redux/common/commonSlice';
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
import CInput from '../../../common/components/c_input';
import CSelect from '../../../common/components/c_select';
import { getFormattedDateTime } from '../../../common/utils/app.util';

const InvoiceFilterForm = ({ handleSubmit, filterProps }) => {
    const getAllUserStatus = useAppSelector(selectgetAllUserStatus)
    const getAllClientStatus = useAppSelector(selectgetAllClientStatus)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            clientName: "",
            invoiceStatus: "",
            startDate: new Date(),
            endDate: new Date(),
        },
        // validationSchema: signinFormValidation,
    });


    function handleClick() {
        handleSubmit(formik.values)
    }

    useEffect(() => {
        const { pageNo, pageSize } = formik.values;
        dispatch(getAllClientsAction({ pageNo: 1, pageSize: 60 }));

    }, []);

    return (
        <form onReset={formik.resetForm} >
            <div className="row">
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Client Name:</label>
                    <CSelect
                        name="clientId"
                        value={formik.values.clientId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="select"
                        defualt_option={"Select Client"}
                        options={getAllClientStatus && getAllClientStatus.data}
                        option_lable="clientName"
                        option_value="clientId"
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Invoice Status:</label>
                    <CSelect
                        name="invoiceStatus"
                        value={formik.values.invoiceStatus}
                        placeholder="Status"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="select"
                        defualt_option={"Select Status"}
                        options={[
                            { value: "Created", lable: "Created" },
                            { value: "Paid", lable: "Paid" },
                        ]}
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Invoice Created Start Date:</label>
                    <CInput
                        id="startDate"
                        name="startDate"
                        value={getFormattedDateTime(formik.values.startDate, "YYYY-MM-DD")}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="date"
                    />
                </div>
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Invoice Created End Date:</label>
                    <CInput
                        id="endDate"
                        name="endDate"
                        value={getFormattedDateTime(formik.values.endDate, "YYYY-MM-DD")}
                        placeholder="endDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="date"
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

export default InvoiceFilterForm;
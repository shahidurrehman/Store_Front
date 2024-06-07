import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { getAllClientsAction, getAllUsersAction } from '../../../../app-redux/common/commonActions';
import { selectgetAllClientStatus, selectgetAllUserStatus } from '../../../../app-redux/common/commonSlice';
import { useAppDispatch, useAppSelector } from '../../../../app-redux/hooks';
import { selectTaskStatus } from '../../../../app-redux/task/taskSlice';
import CInput from '../../../../common/components/c_input';
import CSelect from '../../../../common/components/c_select';
import CLoader from '../../../../common/components/loader';

const TaskFilterForm = ({ handleSubmit }) => {

    const [loader, showLoader] = useState(false)

    const getAllClientStatus = useAppSelector(selectgetAllClientStatus)
    const getAllUserStatus = useAppSelector(selectgetAllUserStatus)
    const taskStatus = useAppSelector(selectTaskStatus)
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            pageNo: 1,
            pageSize: 500,
            "title": null,
            "clientName": null,
            "Responsible": null,
            "assistantResponsible": null,
            "leadResponsible": null,
            "seniorResponsible": null,
            "department": null,
            "email": null,
            "isBillable": true,
            "recieved": null,
            "description": null,
        },
        // validationSchema: signinFormValidation,

    });


    useEffect(() => {
        let stringValue = formik.values.isBillable;
        const Billable = str2bool(stringValue)
        formik.setFieldValue("isBillable", Billable)

    }, [formik.values.isBillable])


    var str2bool = (value) => {

        if (value && typeof value === "string") {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
        }
        return value;

    }


    useEffect(() => {
        formik.setFieldValue("title", formik.values.description)
    }, [formik.values.description])



    function handleClick() {

        handleSubmit(formik.values)
    }

    useEffect(() => {
        const { pageNo, pageSize } = formik.values;
        dispatch(getAllUsersAction({ pageNo, pageSize }));
        dispatch(getAllClientsAction({ pageNo, pageSize }));

    }, []);

    useEffect(() => {
        if (taskStatus === "loading") showLoader(true)
        else showLoader(false)
    }, [taskStatus]);

    return (
        <form onReset={formik.resetForm}>
            <div className="row">
                <div className="mb-3 col-xl-3">
                    <label className="form-label">Keyword:</label>
                    <CInput
                        id="description"
                        name="description"
                        value={formik.values.description}
                        placeholder="Search with Keyword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                    />
                </div>
                <div className=" mb-3 col-xl-3">
                    <label className="form-label">Client:</label>
                    <CSelect
                        id="clientId"
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
                    <label className="form-label">Responsible: </label>
                    <CSelect
                        id="Responsible"
                        name="Responsible"
                        value={formik.values.Responsible}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="select"
                        defualt_option={"Select Responsible"}
                        options={getAllUserStatus && getAllUserStatus.data}
                        option_lable="displayName"
                        option_value="userId"
                    />
                </div>

                <div className="mb-3 col-xl-3">
                    <h4>Billable:</h4>
                    <div className='row'>
                        <div className="col-xl-3">
                            <label className="form-check">
                                <CInput
                                    name="isBillable"
                                    value={"true"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-check-input"

                                    type="radio"
                                />
                                <span className="form-check-label">Yes</span>
                            </label>

                        </div>
                        <div className="col-xl-3">
                            <label className="form-check">
                                <CInput
                                    name="isBillable"
                                    value={"false"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-check-input"

                                    type="radio"
                                />
                                <span className="form-check-label">No</span>
                            </label>
                        </div>
                    </div>




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
            <CLoader show={loader} />
        </form>
    )
}

export default TaskFilterForm;
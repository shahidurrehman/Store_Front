import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { getParentServiceAction, getServicesAction } from "../../../app-redux/management/managementActions";
import { selectgetParentServiceStatus, selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import Accordion from "../../../common/components/accordion";

import ServiceComponenet from "./service-component";

function ClientServicesNew({ clientId }) {

    const [row, setrow] = useState(false)
    const [hide, sethide] = useState(true)
    const dispatch = useAppDispatch()
    const parentServicesStatus = useAppSelector(selectgetParentServiceStatus)



    const formik = useFormik({
        initialValues: {
            parentServiceId: "",
            engagment: "",
            engagment: "",
        },
        // validationSchema: busniessOfficeFormValidation,
        onSubmit: (values) => {
            const model = {
                BusinessLocationId: values.businessId,
                engagment: values.engagment,
                province: values.province,

            };
        },
    });


    useEffect(() => {
        dispatch(getParentServiceAction())

        console.log("parentServicesStatus", parentServicesStatus && parentServicesStatus.data);
    }, [])


    return (
        <>
            <Accordion
                data={parentServicesStatus && parentServicesStatus.data}
                component={<ServiceComponenet />}
            />
        </>
    );
}

export default ClientServicesNew;

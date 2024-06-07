import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../../../app-redux/hooks';
import Breadcrumbs from '../../../../common/components/bread_crumbs';
import TopContainer from '../../../../common/components/overview';
import CTable from '../../../../common/components/table';
import CLoader from '../../../../common/components/loader';
import FilterArea from '../../../../common/components/filter_area';
import TaskFilterForm from './task-filter-form';
import { getAllTaskAction } from '../../../../app-redux/task/taskActions';
import { selectgetAllTaskstatus } from '../../../../app-redux/task/taskSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const init_headers = [
    { label: "ID", accessor: "taskId", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
    { label: "Title", accessor: "actions", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
    { label: "Client", accessor: "clientName", className: "pt-2 pb-2 w-1", sortable: false, sort: true, },
    { label: "Service", accessor: "serviceName", className: "pt-2 pb-2 w-1", sortable: false, sort: true },
];

function UnAllocated() {
    const dispatch = useAppDispatch();
    const [headers, setHeaders] = useState(init_headers);
    const getAllTaskStatus = useAppSelector(selectgetAllTaskstatus);
    const [loader, showLoader] = useState(false)


    const formik = useFormik({
        initialValues: {
            pageNo: 1,
            pageSize: 500,
            status: "Unallocated"
        },
    })

    useEffect(() => {
        dispatch(getAllTaskAction(formik.values))
    }, [formik.values])


    const handleSubmit = (vals) => {
        let values = formik.values
        formik.setValues({ ...values, ...vals })
    }

    useEffect(() => {
        const { total } = formik.values
        if (getAllTaskStatus && getAllTaskStatus.pagination && getAllTaskStatus.pagination.totalRecords) {

            formik.setFieldValue("total", getAllTaskStatus.pagination.totalRecords);
        }
    }, [getAllTaskStatus]);



    const handelSortChange = (i) => {
        let obj = headers[i];
        let final = { ...obj, sort: !obj.sort }
        let headerList = headers;
        headerList[i] = final;
        formik.setFieldValue('orderBy', final.accessor);
        formik.setFieldValue('order', final.sort ? "ASC" : "DESC");
        setHeaders([...headerList]);
    };

    const changePage = (e, page) => {
        e.preventDefault();
        formik.setFieldValue('pageNo', page);
    };

    const setActionLinks = (obj) => {
        return (
            <>
                {/* <Link to={`/client/edit/${obj.clientId}`} className="me-2"> */}
                <Link to={`/task/edit/${obj.taskId}`}>{obj.title}</Link>
                {/* <IconEdit /> */}
                {/* </Link> */}
            </>
        )
    }

    return (
        <>
            <TopContainer pretitle="Overview" component={<Breadcrumbs />}  to="/task/create-task" title="Unallocated Tasks"  btntxt=" Add Task" />
            <div className="page-body">
                <FilterArea form={<TaskFilterForm handleSubmit={handleSubmit} />} title="Client Search" />
                <div className="container-xl">
                    <div className="col-12 ">
                        <CTable
                            headers={headers}
                            rows={getAllTaskStatus && getAllTaskStatus.data}
                            changePage={changePage}
                            filterProps={formik}
                            handelSortChange={handelSortChange}
                            setActionLinks={setActionLinks}
                            searchable={false}
                            total={formik.values.total}

                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnAllocated;
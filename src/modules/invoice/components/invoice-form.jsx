import { useFormik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { getClientGeneralInformationAction } from "../../../app-redux/client/clientActions";
import { selectgetGeneralInformationStatus } from "../../../app-redux/client/clientSlice";
import { getAllClientsAction } from "../../../app-redux/common/commonActions";
import { selectgetAllClientStatus } from "../../../app-redux/common/commonSlice";
import { useAppDispatch, useAppSelector } from "../../../app-redux/hooks";
import { createInvoiceAction, getInvoiceDataAction } from "../../../app-redux/invoice/invoiceActions";
import { selectgetInvoiceDataStatus } from "../../../app-redux/invoice/invoiceSlice";
import { getServicesAction } from "../../../app-redux/management/managementActions";
import { selectgetServiceStatus } from "../../../app-redux/management/managementSlice";
import IconAddPlus from "../../../assets/icons/add_plus";
import IconPlus from "../../../assets/icons/plus";
import IconTrash from "../../../assets/icons/trash";
import Breadcrumbs from "../../../common/components/bread_crumbs";
import Button from "../../../common/components/button";
import CInput from "../../../common/components/c_input";
import CSelect from "../../../common/components/c_select";
import TopContainer from "../../../common/components/overview";
import RemoveableCard from "../../../common/components/removeable_card";
import { add, deleteRowFromArry, getFormattedDateTime } from "../../../common/utils/app.util";

const invoiceItems = {
    service: "",
    totalAmount: "0",
    amount: "0",

}
function InvoiceForm({ values }) {
    const getInvoiceDataStatus = useAppSelector(selectgetInvoiceDataStatus)
    const getAllClientStatus = useAppSelector(selectgetAllClientStatus)
    const getClientInformation = useAppSelector(selectgetGeneralInformationStatus);
    const getServicesStatus = useAppSelector(selectgetServiceStatus)
    const [show, setShow] = useState(false)
    const [data, setData] = useState([invoiceItems]);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues:
        {
            invoiceNumber: "",
            clientId: "",
            invoice: [],
            notes: "",
            outOfPocketExpenses: "",
            discount: "",
            salesTax: "",
            totalTax: "",
            netTotal: "",
            dueDate: new Date(),


        },
        // validationSchema: signinFormValidation,
        onSubmit: (values) => {
            const model = {
                invoiceNumber: values.invoiceNumber,
                clientId: values.Clients,
                invoiceItems: values.invoice,
                notes: values.notes,
                discount: values.discount,
                salesTax: values.salesTax,
                totalTax: values.totalTax,
                netTotal: values.netTotal,
                dueDate: values.dueDate,
                outOfPocketExpenses: values.outOfPocketExpenses
            };
            console.log("model", model);
            // dispatch(createInvoiceAction(model))
        },
    });

    useEffect(() => {
        console.log("values", formik.values.invoice);
        if (getInvoiceDataStatus && getInvoiceDataStatus.data.invoiceHeader.invoiceNumber) {
            let a = getInvoiceDataStatus.data.invoiceHeader.invoiceNumber
            formik.setFieldValue("invoiceNumber", a)
        }
    }, [formik.values.amount])


    const addRow = () => {
        const { invoice } = formik.values;
        console.log("invoice", invoice);
        formik.setFieldValue("invoice", [...invoice, invoiceItems]);
    };


    const handleDelete = (index) => {
        console.log("index", index);
        const { invoice } = formik.values;
        let remainingArray = deleteRowFromArry(invoice, index, 1);
        formik.setFieldValue("invoice", [...remainingArray]);
    };

    useEffect(() => {
        const { pageNo = 1, pageSize = 55 } = formik.values
        dispatch(getAllClientsAction({ pageNo, pageSize }));
        dispatch(getServicesAction())

        console.log("GetInvoiceData", getInvoiceDataStatus && getInvoiceDataStatus.data);

        console.log("Client", getAllClientStatus);
    }, [])

    useEffect(() => {
        console.log("values", formik.values.Clients);
        if (formik.values.Clients > 0) {
            let clientId = formik.values.Clients

            dispatch(getInvoiceDataAction(clientId));
            // let clientId = formik.values.Clients
            // dispatch(getClientGeneralInformationAction(clientId))
            console.log("GetNewinvoiceData", getInvoiceDataStatus && getInvoiceDataStatus.data);
        }
    }, [formik.values.Clients])


    var result = formik.values.invoice.reduce(function (tot, arr) {
        // return the sum with previous value
        var c = parseInt(arr.amount)
        return tot + c;

        // set initial value as 0
    }, 0);

    return (
        <form onSubmit={formik.handleSubmit}>

            <TopContainer pretitle="Invoice" component={<Breadcrumbs />} title="Invoice" btntxt="Print Invoice" />

            <div className="page-body" id="invoice">
                <div className="container-xl">
                    <div className="card card-lg">
                        <div className="card-body">
                            <div className="row">

                                <div className="col-6 ">
                                    <div className="col-4">

                                        <CSelect
                                            id="Clients"
                                            name="Clients"
                                            value={formik.values.Clients}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="select"
                                            defualt_option={"Select Client"}
                                            options={getAllClientStatus && getAllClientStatus.data}
                                            option_lable="clientName"
                                            option_value="clientId"
                                        />
                                        <div className="col-10">
                                            {formik.values.Clients ?
                                                <div >
                                                    <p className="h3">{getInvoiceDataStatus && getInvoiceDataStatus.data.invoiceHeader.clientName}</p>
                                                    <address>{getClientInformation && getClientInformation.data.industry}
                                                        <div>{getClientInformation && getClientInformation.data.officeAddress}</div>
                                                        <div>{getClientInformation && getClientInformation.data.contactEmail}</div>
                                                    </address>
                                                </div>
                                                :
                                                <p></p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-end">
                                    <p className="h3">Strahlen Studios</p>
                                    <address>Bahria Phase 7
                                        <div> Rawalpindi  </div>
                                        <div> Region,Postal Code  </div>
                                        <div>Bilal@Strahlenstudios.com</div>
                                    </address>
                                </div>

                                <div className="col-12 my-4 ">
                                    <div className="row">
                                        <div className="col-10 my-3">
                                            {getInvoiceDataStatus ?
                                                <h1>Invoice # {getInvoiceDataStatus && getInvoiceDataStatus.data.invoiceHeader.invoiceNumber}</h1>
                                                :
                                                <h1>Invoice # 0000</h1>

                                            }
                                        </div>
                                        <div className="col-2 text-end">
                                            <label className="form-label">Due Date:</label>
                                            <CInput
                                                id="dueDate"
                                                name="dueDate"
                                                value={getFormattedDateTime(formik.values.dueDate, "YYYY-MM-DD")}
                                                placeholder="Due Date"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                type="date"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <table className="table table-transparent table-responsive">
                                    <thead>
                                        <tr>
                                            <th className="col-xl-1 text-start"></th>

                                            <th className="col-xl-9 text-start" >Tasks</th>

                                            <th className="col-xl-2 text-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {formik.values.invoice.map((item, i) =>
                                            <tr>
                                                <td className="p-3 text-center">
                                                    <span onClick={() => handleDelete(i)} className="link-danger cursor-pointer text-end">
                                                        <IconTrash />
                                                    </span>
                                                </td>

                                                {(i === (formik.values.invoice.length - 1)) ?
                                                    <td>
                                                        <div className="col-4 text-end">
                                                            <CSelect
                                                                id="service"
                                                                name={`invoice[${i}].service`}
                                                                value={formik.values.invoice[i].service}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                type="select"
                                                                defualt_option={"Select Service"}
                                                                options={getInvoiceDataStatus && getInvoiceDataStatus.data.invoiceItems}
                                                                option_lable="taskTitle"
                                                                option_value="taskTitle"
                                                            />
                                                        </div>

                                                    </td>
                                                    :
                                                    <td>

                                                        <p className="text-start strong mb-1">{formik.values.invoice[i].service}</p>

                                                    </td>
                                                }

                                                <td className="text-end">
                                                    {(i === (formik.values.invoice.length - 1)) ?
                                                        <CInput
                                                            id="amount"
                                                            name={`invoice[${i}].amount`}
                                                            value={formik.values.invoice[i].amount}
                                                            placeholder="Enter amount"
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}

                                                            type="text"
                                                        />
                                                        :
                                                        <div>PKR {formik.values.invoice[i].amount}</div>
                                                    }
                                                </td>

                                            </tr>

                                        )}
                                        <tr>
                                            <td></td>
                                            <td>
                                                <span className=" col-xl-6 text-indigo bg-transparent cursor-pointer" onClick={addRow}>
                                                    <IconAddPlus />  Add an item
                                                </span>

                                            </td>
                                            <td></td>
                                        </tr>


                                        <tr>
                                            <td colspan="2" className="strong text-end">Total:</td>
                                            <td
                                                className="text-end">
                                                PKR {result}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colspan="2" className="pt-3 strong text-end">Discount:</td>
                                            <td className="text-end">
                                                <div className="col-lg-7 ms-5">

                                                    <CInput
                                                        id="discount"
                                                        name="discount"
                                                        value={formik.values.discount}
                                                        placeholder="Discount"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        type="text"
                                                    />
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" className="strong text-end">Sales Tax:</td>
                                            <td className="text-end">17%</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" className="pt-3 strong text-end">Out of Pocket Expenses: </td>
                                            <td className="text-end">
                                                <div className="col-lg-7 ms-5">
                                                    <CInput
                                                        id="outOfPocketExpenses"
                                                        name="outOfPocketExpenses"
                                                        value={formik.values.outOfPocketExpenses}
                                                        placeholder="Enter"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}

                                                        type="text"
                                                    />
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" className="strong text-end">Total Due:</td>
                                            <td className="text-end">PKR {result}</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="col-6">
                                    <CInput
                                        id="notes"
                                        name="notes"
                                        rows={5}
                                        value={formik.values.notes}
                                        placeholder={"Notes"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="textarea"
                                    />

                                </div>
                                <p className="text-muted text-center mt-5">Thank you very much for doing business with us. We look forward to working with
                                    you again!</p>
                            </div>
                            <div className="text-end"> <Button type="submit" color="btn-info" name="Save" /></div>
                        </div>
                    </div>

                </div>
            </div>





        </form>
    )

}

export default InvoiceForm;